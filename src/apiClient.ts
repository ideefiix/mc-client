import axios from "axios"


const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL ,
    timeout: 2000,
    headers: {'Authorization': `Bearer ${localStorage.getItem('AUTH_TOKEN')}`}
})

//MAYBE DO A INTERCETPOR THAT READS TOKEN IN REQUEST?

axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});


export default axiosClient