import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/clone-a3fa0/us-central1/api' // The API endpoint (cloud function) URL
});

export default instance;