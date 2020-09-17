import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-amznclonesiksnis.cloudfunctions.net/api",
  // http://localhost:5001/amznclonesiksnis/us-central1/api
});

export default instance;

// http://localhost:5001/amznclonesiksnis/us-central1/api
