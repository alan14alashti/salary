import { BaseUrl } from "../../utils/baseUrl";
import axios from "axios";
import Swal from "sweetalert2";
import { useQueryClient, useMutation } from "react-query";
import Button from "../../utils/button";
import { useState } from "react";
// post form method
const PostForm =async (body) => {
	const token = localStorage.getItem("accessToken")
	const res = await axios(`${BaseUrl}/api/Loan/SubmitLoanForUser`, {
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
// submit loan for user component
const SubmitLoanForUser = ({ data }) => {
    const queryClient = useQueryClient()
    const mutation = useMutation(PostForm, {
        onSuccess: (res) => {
            Swal.fire({
    			title: 'Success',
                text: "  حکم با موفقیت حذف شد ",
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
        mutation.mutate({body: {
            loanName: data.title,
            userName: data.userName,
            installmentCont: data.installmentCount,
            amount: data.amount,
            startdate: data.beginInstallmentDate
        }})
  	}
    return (
		<div className="w-100 mx-auto">
			<form onSubmit={(e) => clickHandler(e)}  className={`w-100 d-flex flex-column align-items-center`}>
				<h3> تایید وام </h3>
                <span> ایا از تایید وام اطمینان دارید ؟ </span>
				<div className="my-3">
					<Button text=" بله " type="submit" sty="primary"/>
				</div>
			</form>
		</div>
    );
}
export default SubmitLoanForUser;