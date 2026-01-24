import axios from 'axios';

const response = axios.get('https://jsonplaceholder.typicode.com/todos/1');
response.then(({ data }) => console.log('***', data));
