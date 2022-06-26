import axios from "axios";

// Permite hacer llamadao a la API de canvas para obtener los datos 🚀
const shopApi = axios.create({
  baseURL: "http://localhost:8080/api",
});

export default shopApi;
