import axios from 'axios';

const baseURL = 'http://127.0.0.1:3333';

const api = () => {
  return {
    list: () => {
      return new Promise( async (resolve, reject) => {
        try {
          const books = (await axios.get(`${baseURL}/books`)).data;
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
          const book = (await axios.get(`${baseURL}/books/${id}`)).data;
          resolve(book);
        } catch (error) {
          console.log(error.response.data);
          reject(error.response.data);
        }
      })
    }
  }
}

export default api;
