import api from './base'
import authHeader from '../helpers/authHeader'

const orders = {
  save: (form, id = undefined) => {
    return new Promise(async (resolve, reject) => {
      const method = !!!id ? 'post' : 'put'
      const params = !!!id ? '' : `/${id}`

      let config = {
        headers: { ...authHeader() }
      }

      try {
        resolve(api[method](`orders${params}`, form, config))
      } catch (error) {
        console.log(error.response);
        reject(error.response);
      }
    })
  },
  delete: async (id) => {
    try {
      let config = {
        headers: { ...authHeader() }
      }

      await api.delete(`orders/${id}`, config)
      return true;
    } catch (error) {
      console.log(error.response);
      return false;
    }
  },
  list: () => {
    return new Promise(async (resolve, reject) => {
      try {
        let config = {
          headers: { ...authHeader() }
        }

        const orders = (await api.get('orders', config)).data;
        resolve(orders);
      } catch (error) {
        console.log(error.response);
        reject(error.response);
      }
    })
  },
  get: (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        let config = {
          headers: { ...authHeader() }
        }

        const order = (await api.get(`orders/${id}`, config)).data;
        resolve(order);
      } catch (error) {
        console.log(error.response);
        reject(error.response);
      }
    })
  },
}

export default orders;
