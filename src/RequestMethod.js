import axios from "axios";


const Base_URL = "https://ecom-backend-apis.onrender.com/api/";
const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTc0MmY5NzhhNDJhOGNlYjY4Zjg5NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5Mjk1MjQ5NCwiZXhwIjoxNjkzMjExNjk0fQ.YHOrFmvxDRfau-KUcBmSZYDjQT0rs7eFeJOSVG2gUIw"

export const publicRequest = axios.create({
    baseURL :Base_URL
})

export const userRequest = axios.create({
    baseURL :Base_URL,
    headers:`Bearer ${Token}`
})