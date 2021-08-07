import axios from "axios"
import { BaseUrl } from "../utils/baseUrl"
const token = localStorage.getItem("accessToken")

// Cardboard => ShowRequestTypes
const getCardBoards = async () => {
    const { data } = await axios.post(`${BaseUrl}/api/Cardboard/ShowRequestTypes`,  {
        headers: {
            "Content-Type": "application/json",
            "accept": "*/*",
            'Authorization':`Bearer ${token}`
        },
        data: ""
    })  
    return data
}

export  {
    getCardBoards,

}