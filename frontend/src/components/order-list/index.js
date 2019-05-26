import React, { useState, useEffect } from 'react'
import api from '../../services/orders'
import { toastr } from 'react-redux-toastr'
import { Link } from 'react-router-dom';
import If from '../shared/operator/if'

import { Table, Button } from 'reactstrap'
import OrderShow from '../order-show'

export default function OrderList() {
    const [list, setList] = useState([]);
    const [details, setDetails] = useState(null);

    function handleLoadList (){
        api.list().then(result => {
            setList(result)
        })
    }

    async function cancelOrder(order_id){
        const res = await api.save({status: 'canceled'}, order_id)
        if(res){
            handleLoadList()
            toastr.success('Sucesso', 'Pedido cancelado com exito!')
        }else{
            toastr.error('Error', `Não foi possivel cancelar!`)
        }
    }

    async function handleCancel(order_id){
        const toastrConfirmOptions = {
            onOk: () => cancelOrder(order_id),
            onCancel: () => {}
        };
        toastr.confirm('Você tem certeza sobre isso?', toastrConfirmOptions);
    }

    function handleDetails(index) {
        setDetails(list[index].Items)
    }

    useEffect(() => {
      handleLoadList()
    }, []);

    return (
        <>
            <h1>Listar Pedidos</h1>
            <Link className="btn-primary btn" to="/">Comprar</Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Data da Compra</th>
                        <th>Status</th>
                        <th>Valor da Compra</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.dateOrder}</td>
                            <td>{item.status}</td>
                            <td>{item.total}</td>
                            <td className='options'>
                                <Button onClick={e => handleDetails(index)} className="btn btn-primary mr-1" title="Detalhes"><i className="fa fa-cart-arrow-down" /></Button>
                                <If test={item.status !== 'canceled'}>
                                    <Button onClick={e => handleCancel(item.id)} className="btn btn-danger" title="Cancelar"><i className="fa fa-ban" /></Button>
                                </If>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <OrderShow list={details} />
        </>
    )
}