import axios from "axios";

/**
 * Crea una instancia de Axios configurada.
 *
 * @constant
 * @type {import('axios').AxiosInstance}
 * @description Esta instancia de Axios está preconfigurada con una URL base,
 * un tiempo de espera y encabezados predeterminados para realizar solicitudes HTTP.
 */
const axiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4224/api/v1",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
