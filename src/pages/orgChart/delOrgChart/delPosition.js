import { useState } from "react"
import { toast } from 'react-toastify'
import { useQueryClient } from "react-query"
import { useDeleteOrgChart } from "../../../hooks"
import DelPositionView from "./delPositionView"

const DelPosition = ({ nodeData, closeModal }) => {
    const queryClient = useQueryClient()
    const [formState, setFormState] = useState({
		id: nodeData.id ,
        deleteChildren : false
    })
    const BlurHandler = (event) => {
        let value = event.target.value == 1 ? true : false
        const name = event.target.name
        setFormState({
			...formState,
          	[name]: value
        })
    }
    const mutation = useDeleteOrgChart(formState)
	const clickHandler = (event) => {
		event.preventDefault();
        console.log(formState)
        mutation.mutate(formState, {
            onSuccess: async (res) => {
                toast.success(
                res.data.message,
                );
                queryClient.refetchQueries({ stale: true })
                closeModal()
            },
            onError: (error) => {
                toast.error(
                    error.response.data.message,
                );  
            }
        })
  	}
    return (
		<DelPositionView
            clickHandler={clickHandler}
            closeModal={closeModal}
            BlurHandler={BlurHandler} 
        />
    );
}
export default DelPosition;