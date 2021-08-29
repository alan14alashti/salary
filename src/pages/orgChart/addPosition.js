import { useState } from "react"
import {Input} from "../../utils/input"
import Swal from "sweetalert2"
import { useQueryClient, useMutation } from "react-query"
import Button from "../../utils/button"
import useRequest from '../../components/fetchReq'
import { useAddOrgChart } from "../../hooks"

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
					label="عنوان شغلی"
					changeHandler={BlurHandler}
					id="title"
					name="title"
					type="text"
				/>
				<span>  عنوان شغلی مورد نظر به زیر  گروه  {nodeData.title}اضافه میشود </span>
				<div className="col-12 d-flex justify-content-between align-items-start my-3">
					<Button type="submit" sty="secondary" text=" ثبت "/>
					<Button onclick={closeModal} sty="danger" text=" انصراف "/>
				</div>
			</form>
		</div>
    );
}

export default AddPosition;