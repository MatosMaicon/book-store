import React, { useState } from 'react'
import { Row, Col, Form, Button } from 'reactstrap'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import InputLabel from '../../../components/InputLabel'

import { signIn, signUp } from '../../../store/actions/auth';
import './style.css'

const Auth = props => {
  const initialState = { name: '', email: '', password: '' };
  const [loginMode, setLoginMode] = useState(true);
  const [form, setForm] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setForm({
      ...form,
      [name]: value
    });
  }

  const onSubmit = async (event) => {
    event.preventDefault() // Stop form submit
    const response = loginMode ? await props.signIn(form) : await props.signUp(form)
    // if (response) {
    //   ownProps.location.state ?
    //     ownProps.history.push(ownProps.location.state.from) :
    //     ownProps.history.push('/client');
    // }
  }

  return (
    <Row className="justify-content-md-center mt-3">
      <Col className="login-box col-sm-6 col-">
        <h2 className="text-center">Login do Cliente</h2>
        <div className="login-box-body p-3">
          <Form>
            <InputLabel type="text" name="name" value={form.name} onChange={handleInputChange}
              placeholder="Nome" icon='user' hide={loginMode} />
            <InputLabel type="email" name="email" value={form.email} onChange={handleInputChange}
              placeholder="E-mail" icon='envelope' />
            <InputLabel type="password" name="password" value={form.password} onChange={handleInputChange}
              placeholder="Senha" icon='lock' />
            <InputLabel type="password" name="confirm_password"
              placeholder="Confirmar Senha" icon='lock' hide={loginMode} />
            <Row>
              <Col className="col-sm-4">
                <Button type="submit" onClick={onSubmit}
                  className="btn btn-primary btn-block btn-flat">
                  {loginMode ? 'Entrar' : 'Registrar'}
                </Button>
              </Col>
            </Row>
          </Form>
          <br />
          <Button onClick={() => setLoginMode(!loginMode)} className="link">
            {loginMode ? 'Novo usuário? Registrar aqui!' :
              'Já é cadastrado? Entrar aqui!'}
          </Button>
        </div>
      </Col>
    </Row>
  )
}

// const mapStateToProps = (state, ownProps) => ({
//   ownProps
// })

const mapDispatchToProps = dispatch => bindActionCreators({ signIn, signUp }, dispatch)

export default connect(null, mapDispatchToProps)(Auth);
