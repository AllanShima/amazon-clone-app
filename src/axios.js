// With axios it make the process of making requests to the backend easier.
// Here we are creating an instance of axios with a custom config.
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api-zlx4bexdea-uc.a.run.app' // The API endpoint (cloud function) URL
});
// localhost url: http://127.0.0.1:5001/clone-a3fa0/us-central1/api - with firebase emulators:start
// real url: https://api-zlx4bexdea-uc.a.run.app - after firebase deploy
export default instance;