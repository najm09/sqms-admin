export const getAccessToken = () => localStorage.getItem('access-token');

export const headers = () => {return {'access-token': getAccessToken()}};

export const setUpAxios = (axios) => {
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if(error.response){
        if(error.response.status === 401){
          window.location.replace("/error")
        }
      }
      return Promise.reject(error)
    }
  )
}