export const MAIN_URL = {
  ALL_DETAILS: process.env.REACT_APP_ADMIN_USERS,
}

export const endpoints = {
  USERS: "/users",
  PATIENTS: "/patients",
  LOGIN: "/login"
}

// `${MAIN_URL.ALL_DETAILS}${endpoints.USERS}`