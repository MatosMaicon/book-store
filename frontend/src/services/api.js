import axios from 'axios';

const instance = axios.create({ baseURL: 'http://127.0.0.1:3001/api/v1' });

const api = {
  bookSave: (form, id = undefined) => {
    return new Promise( async (resolve, reject) => {
      const method = !!!id ? 'post' : 'put'
      const params = !!!id ? '' : `/${id}`
  
      try {
        const formData = new FormData();
        console.log(form)
        
        for ( var key in form ) {
          formData.append(key, form[key]);
        }

        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTU4NzE5MDY5LCJleHAiOjE1NTg4MDU0Njl9.2u9jnK5smSE-zD3Q3kcMAWccuKjE3x1BFJMuztni3ng'
            }
        }

        resolve(instance[method](`books${params}`, formData,config))
      } catch (error) {
        console.log(error.response);
        reject(error.response);
      }
    })
  },
  list: () => {
    return new Promise( async (resolve, reject) => {
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
    return new Promise( async (resolve, reject) => {
      try {
        const book = (await instance.get(`books/${id}`)).data;
        resolve(book);
      } catch (error) {
        console.log(error.response.data);
        reject(error.response.data);
      }
    })
  }
}

export default api;
