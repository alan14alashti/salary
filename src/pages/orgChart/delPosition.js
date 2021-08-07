import { useState } from "react";
import { BaseUrl } from "../../utils/baseUrl";
import axios from "axios";
import Swal from "sweetalert2";
import { useQueryClient, useMutation } from "react-query";
import Button from "../../utils/button";
import { Select } from "../../utils/input";
// post form method
const PostForm =async (body) => {
	const token = localStorage.getItem("accessToken")
	const res = await axios(`${BaseUrl}/api/OrganizationChart/DeletePosiotion`, {
		method:'POST',
		headers: {
			"Content-Type": "application/json",
			"accept": "*/*",
			'Authorization':`Bearer ${token}`
		},                                   
		data : body.body
	})
    return res
}
// del position component
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
    const mutation = useMutation(PostForm, {
        onSuccess: (res) => {
            Swal.fire({
    			title: 'Success',
                text: " پوزیشن با موفقیت حذف شد ",
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
        onError: () => {
            Swal.fire({
                title: 'Error!',
                text:   " مشکلی وجود دارد ",
                icon: 'error',
                confirmButtonColor: '#0050f0',
                confirmButtonText: 'امتحان دوباره',
                timer: 3000
            }
        )}
    })
	const clickHandler = (event) => {
		event.preventDefault();
		// const body = JSON.stringify(formState)
        mutation.mutate({body: formState})
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