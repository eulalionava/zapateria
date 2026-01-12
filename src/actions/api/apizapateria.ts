
import axios from "axios";

const apiZapateria = axios.create({
    baseURL: "http://localhost:8080/api",
});

apiZapateria.interceptors.request.use( async (config) => {
    return config
});

export default apiZapateria;