import { useMutation, useQueryClient } from "react-query"
import React from "react"
import { toast } from "react-toastify"
import useRequest from "../../../components/fetchReq"
import Button from "../../../utils/button";

const EditBimeTypes = ({closeModal, id}) => {
	const queryClient = useQueryClient()
	const mutation = useMutation(useRequest({
        url:`api/Insurance/InsuranceDelete?id=${id}`,
        method:"DELETE",
        body: ""
    }), {
        onSuccess: (res) => {
            toast.success(res.data.message)
			closeModal()
			queryClient.refetchQueries({ stale: true })
        },
        onError: (error) => {
            toast.error(error)
        }
    }
    )
	const onSubmit = (e) => {
        e.preventDefault()
        mutation.mutate()
  	}
    return (
		<form onSubmit={onSubmit} className="d-flex flex-column align-items-center ">
            <span> ایا از حذف نوع بیمه مورد نظر اطمینان دارید ؟ </span>
            <div className="col-12 d-flex justify-content-between mt-3">
                <Button type='submit' sty="secondary" text=" ثبت "/>
                <Button onclick={closeModal} sty="danger" text=" انصراف "/>
            </div>
        </form>
    );
}
export default EditBimeTypes;