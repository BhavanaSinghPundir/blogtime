import axios from "axios"
export const axiosInstance=axios.create({
    baseURL : "https://bloggtime.herokuapp.com/api/"
})