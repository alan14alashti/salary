import { BaseUrl } from "../../utils/baseUrl";
import axios from "axios";
import Swal from "sweetalert2";
import { useQueryClient, useMutation } from "react-query";
import Button from "../../utils/button";

// const PostForm =async (id) => {
// 	const token = localStorage.getItem("accessToken")
// 	const res = await axios(`${BaseUrl}/api/Loan/DeleteLoanType?id=${id.id}`, {
// 		method:'POST',
// 		headers: {
// 			"Content-Type": "application/json",
// 			"accept": "*/*",
// 			'Authorization':`Bearer ${token}`
// 		},                                   
// 		data : ""
// 	})
//     return res
// }

const DelMaliat = ({ id, closeModal }) => {
    const queryClient = useQueryClient()
    // const mutation = useMutation(PostForm, {
    //     onSuccess: (res) => {
    //         Swal.fire({
    // 			title: 'Success',
    //             text: res.data.message,
    //     		icon: 'success',
    // 			confirmButtonColor: '#0050F0',
    //             timer: 3000
    //         })
    //         // console.log(res)
    //         // const charts = queryClient.getQueryData("OrgChart")
    //         // console.log(charts)
    //         // QueryClient.refetchQueries("OrgChart")
    //         // queryClient.refetchQueries(["OrgChart"])
    //         queryClient.refetchQueries({ stale: true })
    //     },
    //     onError: (error) => {
    //         Swal.fire({
    //             title: 'Error!',
    //             text:   error.response.data.message,
    //             icon: 'error',
    //             confirmButtonColor: '#0050f0',
    //             confirmButtonText: 'امتحان دوباره',
    //             timer: 3000
    //         }
    //     )}
    // })
	const clickHandler = (event) => {
		event.preventDefault();
        // mutation.mutate({id: id})
  	}
    return (
		<div className="w-100 mx-auto">
			<form onSubmit={(e) => clickHandler(e)}  className={`w-100 d-flex flex-column align-items-center`}>
				<h3> حذف جدول مالیاتی </h3>
                <span> ایا از حذف جدول مالیاتی مورد نظر اطمینان دارید ؟ </span>
				<div className="col-12 d-flex justify-content-between mt-3">
                    <Button type="submit" sty="secondary" text=" ثبت "/>
                    <Button onclick={closeModal} sty="danger" text=" انصراف "/>
                </div>
			</form>
		</div>
    );
}
export default DelMaliat;