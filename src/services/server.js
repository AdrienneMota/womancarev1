import axios from "axios";

const URL = "http://localhost:4000"

const api = axios.create({ baseURL: URL})

export default api
