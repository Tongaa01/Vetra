import axios from "axios";
import { getLocalToken } from "../../services/tokenService";

const APIURL=import.meta.env.VITE_APIURL
const baseURL=`${APIURL}/mercadopago/create-preference`


export const getPreferenceId = async (orderId: string) => {
  try {
    const response = await axios.post(`${baseURL}/${orderId}`,{},{headers:{"Authorization":`Bearer ${getLocalToken()}`}});
    return response.data;
  } catch (error) {
    console.log("Ocurrio un error durante la obtencion de la preference ID: ", error);
    return null;
  }
};
