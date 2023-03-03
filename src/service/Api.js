import axios from "axios";

export const Api = axios.create({
    baseURL: "https://my-json-server.typicode.com/kodplex/pr-re-ec-products/db",
});
