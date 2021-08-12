import { useState } from "react"
import useRequest from '../../components/fetchReq'
import Swal from "sweetalert2"
import { useQueryClient, useMutation } from "react-query"
import Button from "../../utils/button"
import { Select, Input } from "../../utils/input"

const AddContractItem = () => {
    const queryClient = useQueryClient()
    const [formState, setFormState] = useState({
        detailName: "",
        detailValue: "",
        description: ""
    })
    const BlurHandler = (event) => {
        let value = event.target.value
        const name = event.target.name
        setFormState({
			...formState,
          	[name] : value
        })
    }
    const mutation = useMutation(useRequest({
        url:`api/Contract/AddContractDetail`,
        method:"POST",
        body:JSON.stringify(formState)
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
                text:  error.response.data.message,
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
				<h3> تغییر سمت </h3>
                <Input
					required="true"
					label="نام جزییات حکم"
					BlurHandler={BlurHandler}
					id="detailName"
					name="detailName"
					type="text"
				/>
                <Input
					required="true"
					label="مقدار جزییات حکم"
					BlurHandler={BlurHandler}
					id="detailValue"
					name="detailValue"
					type="text"
				/>
                <Input
					required="true"
					label="توضیحات"
					BlurHandler={BlurHandler}
					id="description"
					name="description"
					type="text"
				/>
				<div className="my-3">
					<Button text="اعمال تغییرات" type="submit" sty="primary"/>
				</div>
			</form>
		</div>
    );
}
export default AddContractItem;