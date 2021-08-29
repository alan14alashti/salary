import { useState } from "react"
import {Input} from "../../utils/input"
import Swal from "sweetalert2"
import { useQueryClient} from "react-query"
import Button from "../../utils/button"
import { useAddLocationChart } from "../../hooks"

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
			onSuccess: (res) => {
				console.log(res)
				Swal.fire({
					title: 'Success',
					text: res.data.message,
					icon: 'success',
					confirmButtonColor: '#5C8CBE',
					timer: 3000
				})
				
				// console.log(res)
				// const charts = queryClient.getQueryData("OrgChart")
				// console.log(charts)
				// QueryClient.refetchQueries("OrgChart")
				// queryClient.refetchQueries(["OrgChart"])
				queryClient.refetchQueries({ stale: true })
				closeModal()
			},
			onError: (error) => {
				console.log(error.response)
				Swal.fire({
					title: 'Error!',
					text: error.response.data.message,
					icon: 'error',
					confirmButtonColor: '#5C8CBE',
					confirmButtonText: 'امتحان دوباره',
					timer: 3000
				})
			}
		})
  	}
    return (
		<div className="w-100 mx-auto">
			<form onSubmit={clickHandler} className={`w-100 d-flex flex-column align-items-center`}>
				<Input
					required="true"
					label="عنوان محل خدمت"
					changeHandler={BlurHandler}
					id="unitName"
					name="unitName"
					type="text"
				/>
				<span> محل خدمت مورد نظر به زیر  گروه  {nodeData.unitName}اضافه میشود </span>
				<div className="col-12 d-flex justify-content-between align-items-start my-3">
					<Button type="submit" sty="secondary" text=" ثبت "/>
					<Button onclick={closeModal} sty="danger" text=" انصراف "/>
				</div>
			</form>
		</div>
    );
}

export default AddLocationNode;