import axios from "axios";

const Api = axios.create({baseURL: REACT_APP_BASE_API});
export default Api;