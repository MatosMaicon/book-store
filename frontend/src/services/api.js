import axios from 'axios';

const instance = axios.create({ baseURL: 'http://127.0.0.1:3001/api/v1' });

const api = {
  bookSave: (form, id = undefined) => {
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

        resolve(instance[method](`books${params}`, formData, config))
      } catch (error) {
        console.log(error.response);
        reject(error.response);
      }
    })
  },
  bookDelete: async (id) => {
    try {
      await instance.delete(`books/${id}`)
      return true;
    } catch (error) {
      console.log(error.response);
      return false;
    }
  },
  list: () => {
    return new Promise(async (resolve, reject) => {
      try {
        const books = (await instance.get('books')).data;
        resolve(books);
      } catch (error) {
        console.log(error.response.data);
        reject(error.response.data);
      }
    })
  },
  byId: (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const book = (await instance.get(`books/${id}`)).data;
        resolve(book);
      } catch (error) {
        console.log(error.response.data);
        reject(error.response.data);
      }
    })
  },
  login: async (form) => {
    try {
      return await instance.post(`/authenticate`, form)
    } catch (error) {
      console.log(error.response);
      return false;
    }
  },
  signup: async (form) => {
    try {
      return await instance.post(`/users`, form)
    } catch (error) {
      console.log(error.response);
      return false;
    }
  }
}

export default api;
