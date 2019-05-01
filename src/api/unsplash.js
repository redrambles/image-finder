import axios from 'axios';
import unsplash_token from './tokens';


export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${unsplash_token}`
  }
});