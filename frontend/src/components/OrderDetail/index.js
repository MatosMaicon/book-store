import React from 'react'

import If from '../Operator/if'
import { Table } from 'reactstrap'

export default function StudentList(props) {
  function renderRows() {
    if (props.list)
      return props.list.map(item => {
        return <tr key={item.id}>
          <td>{item.product.name}</td>
          <td>{item.quantity}</td>
          <td>{item.product.price}</td>
        </tr>
      })
  }

  return (
    <If test={props.list}>
      <h4>Detalhes do Pedido</h4>
      <Table className="table">
        <thead>
          <tr>
            <th>Produtos</th>
            <th>Quantidade</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </Table>
    </If>
  )
}