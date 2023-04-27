import { MAIN_URL, endpoints } from "../Constants/Urls";
import axios from "axios";
import { headers } from "./setUpAxios";

export const getAllUsers = async() => {
  return await axios.get(`${MAIN_URL.ALL_DETAILS}${endpoints.USERS}`, {headers});
}

export const getAllPatients = async() => {
  return await axios.get(`${MAIN_URL.ALL_DETAILS}${endpoints.PATIENTS}`, {headers});
}

export const getQueueStatus = async() => {
  return await axios.get(`${MAIN_URL.ALL_DETAILS}${endpoints.QUEUE_STATUS}`, {headers});
}

export const login = async(params) => {
  const body = params;
  return await axios.post(`${MAIN_URL.ALL_DETAILS}${endpoints.LOGIN}`, body);
}

export const signup = async(params) => {
  const body = params;
  return await axios.post(`${MAIN_URL.ALL_DETAILS}${endpoints.SIGNUP}`, body);
}

export const adminActions = async(body) => {
  console.log("body", body, "headers", headers());
  return await axios.post(`${MAIN_URL.ALL_DETAILS}${endpoints.ADMIN_ACTIONS}`, body, {headers: headers()});
}