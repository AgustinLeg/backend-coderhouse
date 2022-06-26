import axios from "axios";

// Permite hacer llamadao a la API para obtener los datos 🚀
const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080/api"
    : "https://restserver-leg.herokuapp.com/api";

const shopApi = axios.create({
  baseURL,
});

export default shopApi;
