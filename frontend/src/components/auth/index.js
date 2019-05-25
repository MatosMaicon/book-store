import './style.css'
import React, { Component } from 'react'
import { Row, Col, Form, Button } from 'reactstrap'
import InputLabel from '../shared/input-label'
import { toastr } from 'react-redux-toastr'

import api from '../../services/api'

class Auth extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loginMode: true,
            form: {
                name: '',
                email: '',
                password: ''
            }
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            ...this.state,
            form: {
                ...this.state.form,
                [name]: value
            }
        });
    }

    changeMode() {
        this.setState({ loginMode: !this.state.loginMode })
    }
    onSubmit = async(event) => {
        event.preventDefault() // Stop form submit
        const response = this.state.loginMode ? await api.login(this.state.form) : await api.signup(this.state.form)

        if(response.status === 200){
            localStorage.setItem('@bookStore:token', response.data.token);
        }else{
            toastr.error('Error', `${response.statusText}`)
        }
    }
    render() {
        const { loginMode } = this.state

        return (
            <Row className="justify-content-md-center">
                <Col className="login-box col-sm-6 col-">
                    <h2 className="text-center">Login do Cliente</h2>
                    <div className="login-box-body">
                        <Form>
                            <InputLabel type="text" name="name" value={this.state.form.name} onChange={this.handleInputChange}
                                placeholder="Nome" icon='user' hide={loginMode} />
                            <InputLabel type="email" name="email" value={this.state.form.email} onChange={this.handleInputChange}
                                placeholder="E-mail" icon='envelope' />
                            <InputLabel type="password" name="password" value={this.state.form.password} onChange={this.handleInputChange}
                                placeholder="Senha" icon='lock' />
                            <InputLabel type="password" name="confirm_password"
                                placeholder="Confirmar Senha" icon='lock' hide={loginMode} />
                            <Row>
                                <Col className="col-sm-4">
                                    <Button type="submit" onClick={this.onSubmit}
                                        className="btn btn-primary btn-block btn-flat">
                                        {loginMode ? 'Entrar' : 'Registrar'}
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                        <br />
                        <a onClick={() => this.changeMode()}>
                            {loginMode ? 'Novo usuário? Registrar aqui!' :
                                'Já é cadastrado? Entrar aqui!'}
                        </a>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Auth