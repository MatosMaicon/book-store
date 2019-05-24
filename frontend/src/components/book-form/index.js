import React, { useState, useEffect } from 'react'
import { toastr } from 'react-redux-toastr'
import api from '../../services/api'
import { Link } from 'react-router-dom';

import { Row, Col, Form, Button } from 'reactstrap'
import InputLabel from '../shared/input-label'

export default function StudentList(props) {
    const id = props.match.params.id

    const [form, setForm] = useState({
        name: '',
        description: '',
        price: 0,
        image: null,
        active: true
    });

    useEffect(() => {
        if (!!id){
            api.byId(id).then(response => {
                setForm({...response})
            })
            .catch(err => {
                toastr.error('Error', `${err}`)
                props.history.push('/books')
            })
        }
    }, []);
    

    function handleInputChange (event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setForm({
            ...form,
            [name]: value
        });
    }

    function handleCheckBoxChange (event) {
        const target = event.target;
        const value = target.checked;
        const name = target.name;
    
        setForm({
            ...form,
            [name]: value
        });
    }

    function handleFileChange (event) {
      const target = event.target;
      const value = target.files[0];
      const name = target.name;
  
      setForm({
          ...form,
          [name]: value
      });
  }

    async function handleSave (event){
        event.preventDefault() // Stop form submit

        await api.bookSave(form, id)
        .then(resp => {
            toastr.success('Sucesso', 'Operação Realizada com sucesso.')
            props.history.push('/books')
        })
        .catch(err => {
            toastr.error('Error', `${err}`)
        })   
    }

    return (
        <>
            <h1>Cadastrar Livros</h1>
            <Row>
              <Form className="col-sm-12 col-lg-6">
                  <Row>
                    <Col>
                      <InputLabel label="Nome" name="name" type="text" placeholder="Informe o nome do livro" value={form.name} onChange={handleInputChange} />
                    </Col>
                    <Col>
                      <InputLabel label="Preço" name="price" type="number" placeholder="Informe o valor do livro" value={form.price} onChange={handleInputChange} />
                    </Col>
                  </Row>

                  <Row>
                    <Col >
                      <InputLabel label="Descrição" name="description" type="textarea" placeholder="Informe a descrição do livro" value={form.description} onChange={handleInputChange} />
                    </Col >
                  </Row>
                  
                  <Row>
                    <Col >
                      <InputLabel label="Foto de Capa" name="image" type="file" value={form.image} onChange={handleFileChange} />
                    </Col >
                  </Row>

                  <Row>
                    <Col >
                      <InputLabel label="Ativo" name="active" type="switch" value={form.active} onChange={handleCheckBoxChange} />
                    </Col >
                  </Row>

                  <Link className="default btn" to="/books">
                      Cancelar
                  </Link>

                  <Button variant="primary" onClick={handleSave}>
                      Salvar
                  </Button>
              </Form>
            </Row>
        </>
    )
}