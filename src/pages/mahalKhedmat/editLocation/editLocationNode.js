import { useState } from "react"
import { useQueryClient } from "react-query"
import { useEditLocationChart } from "../../../hooks"
import { toast } from "react-toastify"
import EditLocationView from "./editLocationView"

const EditLocationNode = ({ nodeData, closeModal }) => {
    const queryClient = useQueryClient()
    const locchart = queryClient.getQueryData("LocationChart")
    
    // console.log(orgchart)
    const locations = []
    locchart.data.map((item) => locations.push({
        value:  item.id,
        title: item.unitName
    }))
    // console.log(positions)
    const [formState, setFormState] = useState({
		id: nodeData.id ,
        unitName: nodeData.unitName, 
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
    const mutation = useEditLocationChart(formState)
    
	const clickHandler = (event) => {
		event.preventDefault();
        console.log(formState)
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
		<EditLocationView
            formState={formState}
            BlurHandler={BlurHandler}
            nodeData={nodeData}
            locations={locations}
            closeModal={closeModal}
            clickHandler={clickHandler}
        />
    );
}
export default EditLocationNode;
