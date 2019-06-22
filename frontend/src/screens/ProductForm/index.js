import React, { useEffect } from 'react'
import { Button } from 'reactstrap'
import { toastr } from 'react-redux-toastr'
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

import CardContent from '@material-ui/core/CardContent';
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'

import { CustomInputComponent, CustomSwitchComponent } from '../../components/InputLabel/index2'
import api from '../../services/products'

const schema = Yup.object().shape({
  name: Yup.string()
    .required('Informe o nome!')
    .min(5, 'O nome deve conter mais de 5 letras!')
    .max(100, 'O nome deve conter menos de 100 letras!')
    .notOneOf(['livro', 'book'], 'Esse nome não pode camarada!'),
  price: Yup.number().required('Informe o preço!'),
  description: Yup.string().required('Informe uma descrição!'),
  image: Yup.string().required('Informe uma foto de capa!'),
  active: Yup.boolean().required('Informe se ativo ou inativo!')
})

const enhanceWithFormik = withFormik({
  mapPropsToValues: () => ({ id: null, name: '', description: '', price: 0, image: '', active: true }),
  handleSubmit: async (values, bag) => {
    await api.save(values, values.id)
      .then(resp => {
        toastr.success('Sucesso', 'Operação Realizada com sucesso.')
        bag.props.history.push('/products')
      })
      .catch(err => {
        toastr.error('Error', `${err}`)
      })
  },
  isInitialValid: false,
  validateOnChange: true,
  validateOnBlur: true,
  displayName: 'MyForm',
  validationSchema: schema
})

const ProductForm = props => {
  useEffect(() => {
    const id = props.match.params.id;

    if (!!id) {
      api.get(id).then(response => {
        props.setValues({ ...response, image: '' })
      })
        .catch(err => {
          toastr.error('Error', `${err}`)
          props.history.push('/products')
        })
    }
  }, []);

  return (
    <>
      <h1>Cadastrar Produto</h1>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Form className="col-sm-12 col-lg-12">
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Field name="name" label="Nome" placeholder="Informe o nome do produto" component={CustomInputComponent} />
                </Grid>
                <Grid item xs={6}>
                  <Field type="number" name="price" label="Preço" placeholder="Informe o valor do produto" component={CustomInputComponent} />
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Field name="description" label="Descrição" placeholder="Informe a descrição do produto" component={CustomInputComponent} multiline rows="4" />
                </Grid >
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Field type="file" name="image" label="Foto de Capa" component={CustomInputComponent} />
                </Grid >
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Field name="active" label="Ativo" component={CustomSwitchComponent} />
                </Grid >
              </Grid>

              <Link className="default btn" to="/products">Cancelar</Link>

              <Button variant="primary" type="submit">Salvar</Button>
            </Form>
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}

export default enhanceWithFormik(ProductForm)
