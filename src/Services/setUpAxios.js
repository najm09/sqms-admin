export const getAccessToken = () => localStorage.getItem('access-token');

export const headers = () => {return {'access-token': getAccessToken()}};

export const setUpAxios = (axios) => {
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if(error.response){
        if(error.response.status === 401){
          windows.location.replace("/login")
        }
      }
      return Promise.reject(error)
    }
  )
}