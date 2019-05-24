import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom';

import { Table } from 'reactstrap'

export default function StudentList() {
    const [list, setList] = useState([]);

    function handleLoadList (){
        api.list().then(result => {
            setList(result)
        })
    }

    useEffect(() => {
      handleLoadList()
    }, []);

    return (
        <>
            <h1>Listar Livros</h1>
            <Link className="btn-primary btn" to="books/new">Novo</Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Ativo</th>
                        <th>Data de Criação</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.active ? "Sim" : "Não"}</td>
                            <td>{item.createdAt}</td>
                            <td className='options'>
                                <Link to={`/books/edit/${item.id}`} className="btn btn-primary">edit</Link>
                                <Link to={`/books/edit/${item.id}`} className="btn btn-danger">delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}