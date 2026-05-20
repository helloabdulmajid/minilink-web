import axios from "axios"

const API_BASE_URL = "https://minilink-twtn.onrender.com/api/v1/urls";
//const API_BASE_URL2 = "https://minilink-twtn.onrender.com/";
//const API_BASE_URL = "https://localhost:8080/api/v1/urls";


export const createShortUrl = async (payload) => {

    const response = await axios.post(
        API_BASE_URL,
        payload
    )

    return response.data
}
export const getUrlAnalytics = async (
    shortCode
) => {

    const response = await axios.get(
       `${API_BASE_URL}/${shortCode}/analytics`
    )

    return response.data
}