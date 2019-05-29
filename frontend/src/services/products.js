import api from './base'

const products = {
  save: (form, id = undefined) => {
    return new Promise(async (resolve, reject) => {
      const method = !!!id ? 'post' : 'put'
      const params = !!!id ? '' : `/${id}`

      try {
        const formData = new FormData();

        for (var key in form) {
          formData.append(key, form[key]);
        }

        const config = {
          headers: {
            'content-type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('@bookStore:token')}`
          }
        }

        resolve(api[method](`products${params}`, formData, config))
      } catch (error) {
        console.log(error.response);
        reject(error.response);
      }
    })
  },
  delete: async (id) => {
    try {
      await api.delete(`products/${id}`)
      return true;
    } catch (error) {
      console.log(error.response);
      return false;
    }
  },
  list: () => {
    return new Promise(async (resolve, reject) => {
      try {
        const products = (await api.get('products')).data;
        resolve(products);
      } catch (error) {
        console.log(error.response.data);
        reject(error.response.data);
      }
    })
  },
  get: (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const product = (await api.get(`products/${id}`)).data;
        resolve(product);
      } catch (error) {
        console.log(error.response.data);
        reject(error.response.data);
      }
    })
  },
}

export default products;
