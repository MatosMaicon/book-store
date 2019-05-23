import axios from 'axios';

const instance = axios.create({ baseURL: 'http://127.0.0.1:3001/api/v1' });

const api = {
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
