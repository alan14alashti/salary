import Swal from "sweetalert2"
import { useQueryClient, useMutation } from "react-query"
import Button from "../../utils/button"
import useRequest from '../../components/fetchReq'
import { useDelEmployee } from "../../hooks"

const DelUser = ({ closeModal, id }) => {
    const queryClient = useQueryClient()
    const mutation = useDelEmployee(id)
    
	const clickHandler = (event) => {
		event.preventDefault();
        mutation.mutate(id, { 
            onSuccess : (res) => {
                console.log(res)
                Swal.fire({
                    title: 'Success',
                    text: " با موفقیت حذف شد ",
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
            onError : (error) => {
                console.log(error.response)
                Swal.fire({
                    title: 'Error!',
                    text:   " مشکلی وجود دارد ",
                    icon: 'error',
                    confirmButtonColor: '#0050f0',
                    confirmButtonText: 'امتحان دوباره',
                    timer: 3000
                })
            }
        })
  	}
    return (
		<form onSubmit={clickHandler} className={`w-100 d-flex flex-column align-items-center`}>
            <span> ایا از حذف کارمند مورد نظر اطمینان دارید ؟ </span>
			<div className="col-12 d-flex justify-content-between align-items-start my-3">
                <Button type="submit" sty="secondary" text=" ثبت "/>
                <Button onclick={closeModal} sty="danger" text=" انصراف "/>
            </div>
		</form>
    );
}
export default DelUser;