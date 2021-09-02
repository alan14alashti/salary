import { useState } from "react"
import { useQueryClient } from "react-query"
import { useDeleteLocationChart } from "../../../hooks"
import { toast } from 'react-toastify'
import DelLocationView from "./delLocationView"

const DelLocationNode = ({ nodeData, closeModal }) => {
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

    const mutation = useDeleteLocationChart(formState)

	const clickHandler = (event) => {
		event.preventDefault();
        mutation.mutate(formState, {
            onSuccess: (res) => {
                toast.success(res.data.message)
                queryClient.refetchQueries({ stale: true })
                closeModal()
            },
            onError: (error) => {
                toast.error(error.response.data.message)
            }
        })
  	}
    return (
		<DelLocationView
            clickHandler={clickHandler}
            BlurHandler={BlurHandler}
            closeModal={closeModal} 
        />
    );
}

export default DelLocationNode;