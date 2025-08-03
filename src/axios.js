import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api-zlx4bexdea-uc.a.run.app/api/users' // The API endpoint (cloud function) URL
});
// The old localhost url: http://127.0.0.1:5001/clone-a3fa0/us-central1/api - with firebase emulators:start

export default instance;