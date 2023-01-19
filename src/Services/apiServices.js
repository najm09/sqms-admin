import { MAIN_URL, endpoints } from "../Constants/Urls";
import axios from "axios";
import { headers } from "./setUpAxios";

export const getAllUsers = async() => {
  return await axios.get(`${MAIN_URL.ALL_DETAILS}${endpoints.USERS}`, {headers: headers});
}

export const getAllPatients = async() => {
  return await axios.post(`${MAIN_URL.ALL_DETAILS}${endpoints.PATIENTS}`, {headers: headers});
}


export const login = async(params) => {
  const body = params;
  return await axios.post(`${MAIN_URL.ALL_DETAILS}${endpoints.LOGIN}`, body);
}