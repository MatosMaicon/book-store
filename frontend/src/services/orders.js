import api from './base'

const orders = {
  save: (form, id = undefined) => {
    return new Promise(async (resolve, reject) => {
      const method = !!!id ? 'post' : 'put'
      const params = !!!id ? '' : `/${id}`

      try {
        resolve(api[method](`orders${params}`, form))
      } catch (error) {
        console.log(error.response);
        reject(error.response);
      }
    })
  },
  delete: async (id) => {
    try {
      await api.delete(`orders/${id}`)
      return true;
    } catch (error) {
      console.log(error.response);
      return false;
    }
  },
  list: () => {
    return new Promise(async (resolve, reject) => {
      try {
        const orders = (await api.get('orders')).data;
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
        const order = (await api.get(`orders/${id}`)).data;
        resolve(order);
      } catch (error) {
        console.log(error.response);
        reject(error.response);
      }
    })
  },
}

export default orders;
