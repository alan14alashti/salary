import { useState } from "react"
import useRequest from '../../components/fetchReq'
import Swal from "sweetalert2"
import { useQueryClient, useMutation } from "react-query"
import Button from "../../utils/button"
import { Select } from "../../utils/input"
const DelPosition = ({ nodeData }) => {
    const queryClient = useQueryClient()
    const [formState, setFormState] = useState({
		id: nodeData.id ,
        deleteChildren : true
    })
    const BlurHandler = (event) => {
        let value = event.target.value === 1 ? true : false
        const name = event.target.name
        setFormState({
			...formState,
          	[name]: value
        })
    }
    const mutation = useMutation(useRequest({
		url:"api/OrganizationChart/DeletePosiotion",
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
                text:   error.response.data.message,
                icon: 'error',
                confirmButtonColor: '#0050f0',
                confirmButtonText: 'امتحان دوباره',
                timer: 3000
            }
        )}
    })
	const clickHandler = (event) => {
		event.preventDefault();
        mutation.mutate()
  	}
    return (
		<div className="w-100 mx-auto">
				<form onSubmit={(e) => clickHandler(e)}  className={`w-100 d-flex flex-column align-items-center`}>
					<h3> حذف سمت </h3>
					<Select
					 	options={[{value: 1, title:" حذف با فرزندان "}, {value: 0, title:" حذف سمت بدون حذف فرزندان "}]}
						defaultOpt="انتخاب کنید"
						required="false"
						label=" انتخاب نوع حذف "
						changeHandler={BlurHandler}
						id="deleteChildren"
						name="deleteChildren"
					/>
					<div className="my-3">
						<Button text=" حذف سمت " type="submit" sty="primary"/>
					</div>
					<span></span>
				</form>
		</div>
    );
}
export default DelPosition;