import { useState } from "react"
import {Input} from "../../utils/input"
import Swal from "sweetalert2"
import { useQueryClient, useMutation } from "react-query"
import Button from "../../utils/button"
import useRequest from '../../components/fetchReq'

const AddPosition = ({ nodeData }) => {
    const queryClient = useQueryClient()
    const [formState, setFormState] = useState({
		title: "",
        parent: nodeData.id ? nodeData.id : null
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
    const mutation = useMutation(useRequest({
		url:"api/OrganizationChart/AddPosition",
		method:"POST",
		body: JSON.stringify(formState)
	}),
	{
        onSuccess: (res) => {
			Swal.fire({
				title: 'Success',
				text: res.data.message,
				icon: 'success',
				confirmButtonColor: '#0050F0',
				timer: 3000
			})
            // console.log(res)
            // const charts = queryClient.getQueryData("OrgChart")
            // console.log(charts)
            // QueryClient.refetchQueries("OrgChart")
            // queryClient.refetchQueries(["OrgChart"])
            queryClient.refetchQueries({ stale: true })
        },
		onError: (error) => {
			Swal.fire({
				title: 'Error!',
				text: error.response.data.message,
				icon: 'error',
				confirmButtonColor: '#0050f0',
				confirmButtonText: 'امتحان دوباره',
				timer: 3000
			})
		}
    })
	const clickHandler = (event) => {
		event.preventDefault();
        mutation.mutate()
  	}
    return (
		<div className="w-100 mx-auto">
			<form onSubmit={(e) => clickHandler(e)}  className={`w-100 d-flex flex-column align-items-center`}>
				<h3> اضافه کردن سمت </h3>
				<Input
					required="true"
					label="عنوان شغلی"
					BlurHandler={BlurHandler}
					id="title"
					name="title"
					type="text"
				/>
				<div className="my-3">
					<Button text=" ثبت سمت " type="submit" sty="primary"/>
				</div>
				<span>  عنوان شغلی مورد نظر به زیر  گروه  {nodeData.title}اضافه میشود </span>
			</form>
		</div>
    );
}
export default AddPosition;