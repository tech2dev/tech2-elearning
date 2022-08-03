import axios from "axios";

const requestClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/tech2dev/fake-database/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});

export default requestClient;