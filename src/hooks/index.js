import * as api from "../api/index"
import { useQuery, useMutation, queryCache } from "react-query"


//Cardboard => ShowRequestTypes hook
const useShowCardboardReqs = () => {
    return useQuery("cardBoardsReqs", api.getCardBoards)
}



export {
    useShowCardboardReqs,


}