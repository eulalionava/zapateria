
import axios from "axios";

const apiZapateria = axios.create({
    baseURL: "http://localhost:8080/api",
    // baseURL: "https://apizapateria-3v1z.onrender.com/api",

});

apiZapateria.interceptors.request.use( async (config) => {
    return config
});

export default apiZapateria;