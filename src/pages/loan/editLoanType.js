import { useState } from "react";
import Swal from "sweetalert2";
import { useQueryClient, useMutation } from "react-query";
import Button from "../../utils/button";
import { Input } from "../../utils/input";
import useRequest from "../../components/fetchReq";
const EditLoanType = ({ id, closeModal }) => {
    const queryClient = useQueryClient()
    const [formState, setFormState] = useState({
		id: id,
        detailName: "",
    	detailValue: "",
        description: ""
    })
    const BlurHandler = (event) => {
        let value = event.target.value
        const name = event.target.name
        setFormState({
            ...formState,
            [name]: value
        })
    }
    const mutation = useMutation(useRequest({
        url:"api/Loan/EditLoanType",
        method:"POST",
        body: JSON.stringify(formState)
    }), {
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
            })
        }
    }
    )
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
					label=" نام جزییات "
					BlurHandler={BlurHandler}
					id="detailName"
					name="detailName"
					type="text"
				/>
				<Input
					required="true"
					label=" مقدار جزییات "
					BlurHandler={BlurHandler}
					id="detailValue"
					name="detailValue"
					type="number"
				/>    
				<Input
					required="true"
					label=" توضیحات "
					BlurHandler={BlurHandler}
					id="description"
					name="description"
					type="text"
				/>
				<div className="col-12 d-flex justify-content-between mt-3">
                    <Button type="submit" sty="secondary" text=" ثبت "/>
                    <Button onclick={closeModal} sty="danger" text=" انصراف "/>
                </div>
			</form>
		</div>
    );
}
export default EditLoanType;