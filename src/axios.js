// With axios it make the process of making requests to the backend easier.
// Here we are creating an instance of axios with a custom config.
import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/clone-a3fa0/us-central1/api' // The API endpoint (cloud function) URL
});
// The old localhost url: http://127.0.0.1:5001/clone-a3fa0/us-central1/api - with firebase emulators:start

export default instance;