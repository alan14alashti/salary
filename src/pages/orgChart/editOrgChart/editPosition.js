import { useState } from "react"
import { toast } from 'react-toastify'
import { useQueryClient } from "react-query"
import { useEditOrgChart } from "../../../hooks"
import EditPositionView from "./editPositionView"

const EditPosition = ({ nodeData, closeModal }) => {
    const queryClient = useQueryClient()
    const orgchart = queryClient.getQueryData("OrgChart")
    const positions = []
    orgchart.data.map((item) => positions.push({
        value:  item.id,
        title: item.title
    }))
    const [formState, setFormState] = useState({
		id: nodeData.id ,
        title: nodeData.title, 
        parentId: nodeData.parentId,
        isChildMove: false
    })                                         
    const BlurHandler = (event) => {
        let value = event.target.value
        const name = event.target.name
        switch (name) {
            case 'parentId':
                setFormState({
                    ...formState,
                    [name]: Number(value)
                })
                break;
            case 'isChildMove':
                setFormState({
                    ...formState,
                    [name]: value == 1 ? true : false
                })
                break;
            default:
                setFormState({
                    ...formState,
                    [name]: value
                })
                break;
        }
        
    }
    const mutation = useEditOrgChart(formState)
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
		<EditPositionView 
            clickHandler={clickHandler} 
            formState={formState} 
            BlurHandler={BlurHandler} 
            nodeData={nodeData} 
            positions={positions} 
            closeModal={closeModal}
        />
    );
}
export default EditPosition;