import axios from "axios"
import { BaseUrl } from "../utils/baseUrl"
const useRequest = ({ url, method, body }) => {
	const doReq = async () => {
        const token = localStorage.getItem("accessToken")
        const res =await axios(`${BaseUrl}/${url}`, {
        	method: method,
            headers: {
    		    "Content-Type": "application/json"	,
    		    "accept": "*/*",
        	    'Authorization':`Bearer ${token}`
            },                                   
           data : body
        })
        return res
    }
    return doReq
}
export default useRequest;
