import { useState } from "react"
import { toast } from "react-toastify"
import { useQueryClient } from "react-query"
import { useAddOrgChart } from "../../../hooks"
import AddPositionView from "./addPositionView"

const AddPosition = ({ nodeData, closeModal }) => {
    const queryClient = useQueryClient()
    const [formState, setFormState] = useState({
		id:0,
		title: "",
        parentId: nodeData.id ? nodeData.id : null
    })
    const BlurHandler = (event) => {
        let value = event.target.value 
        const name = event.target.name
        // if(name === "parent") {
        //     value = Number(value)
        // }
        setFormState({
			...formState,
          	[name]: value
        })
    }
    // const queryClient = useQueryClient()
    // const charts = queryClient.getQueryData("OrgChart")
    // console.log(charts)
    const mutation = useAddOrgChart(formState)
	
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
		<AddPositionView 
			BlurHandler={BlurHandler} 
			clickHandler={clickHandler} 
			nodeData={nodeData} 
			closeModal={closeModal} 
		/>
    );
}

export default AddPosition;