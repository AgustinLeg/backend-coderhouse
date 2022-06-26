import axios from "axios";

// Permite hacer llamadao a la API de canvas para obtener los datos 🚀
const shopApi = axios.create({
  baseURL: process.env.API_URL,
});

export default shopApi;
