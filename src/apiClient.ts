import axios from "axios"


const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_SERVER_BASE_URL ? process.env.REACT_APP_SERVER_BASE_URL : "http://localhost:5000",
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
    alert("ERROR MOTHER FUCKER")
    return Promise.reject(error);
});


export default axiosClient