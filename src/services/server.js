import axios from "axios";

const URL = process.env.REACT_APP_BACK_END_URL

const api = axios.create({ baseURL: URL})

export default api
