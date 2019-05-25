import api from './base'

const books = {
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

        resolve(api[method](`books${params}`, formData, config))
      } catch (error) {
        console.log(error.response);
        reject(error.response);
      }
    })
  },
  bookDelete: async (id) => {
    try {
      await api.delete(`books/${id}`)
      return true;
    } catch (error) {
      console.log(error.response);
      return false;
    }
  },
  list: () => {
    return new Promise(async (resolve, reject) => {
      try {
        const books = (await api.get('books')).data;
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
        const book = (await api.get(`books/${id}`)).data;
        resolve(book);
      } catch (error) {
        console.log(error.response.data);
        reject(error.response.data);
      }
    })
  },
}

export default books;
