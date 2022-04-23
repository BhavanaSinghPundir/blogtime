import axios from "axios"
export const axiosInstance=axios.create({
    baseURL : "https://blogtimee.herokuapp.com/api"
})