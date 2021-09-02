import { useState } from "react"
import { useQueryClient} from "react-query"
import { toast } from 'react-toastify';
import { useAddLocationChart } from "../../../hooks"
import AddLocationView from "./addLocationView";

const AddLocationNode = ({ nodeData, closeModal }) => {
    const queryClient = useQueryClient()
    const [formState, setFormState] = useState({
		id:0,
		unitName: "",
        parentId: nodeData.id ? nodeData.id : null
    })
    const BlurHandler = (event) => {
        let value = event.target.value 
        const name = event.target.name
        setFormState({
			...formState,
          	[name]: value
        })
    }

    const mutation = useAddLocationChart(formState)
	
	const clickHandler = (event) => {
		event.preventDefault();
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
		<AddLocationView
			nodeData={nodeData}
			closeModal={closeModal}
			clickHandler={clickHandler}
			BlurHandler={BlurHandler}
		/>
    );
}

export default AddLocationNode;