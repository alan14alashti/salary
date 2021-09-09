import { toast } from "react-toastify"
import { useQueryClient, useMutation } from "react-query"
import Button from "../../../utils/button"
import useRequest from '../../../components/fetchReq'

const DelContractType = ({ id, closeModal }) => {
    const queryClient = useQueryClient()
    const mutation = useMutation(useRequest({
        url:`api/Contract/ContractDetailDelete?id=${id}`,
        method:"DELETE",
        body: ""
    }), {
        onSuccess: (res) => {
			toast.success(res.data.message)
			queryClient.refetchQueries({ stale: true })
            closeModal()
        },
        onError: (error) => {
			console.log(error.response)
            toast.error(error.response.data.message)
        }
    }
    )
	const onSubmit = (event) => {
		event.preventDefault();
        mutation.mutate()
  	}
    return (
		<div className="w-100 mx-auto">
			<form onSubmit={(e) => onSubmit(e)}  className={`w-100 d-flex flex-column align-items-center`}>
                <span> آیا از حذف آیتم حکم مورد نظر اطمینان دارید؟ </span>
				<div className="col-12 d-flex justify-content-between mt-3">
					<Button type='submit' sty="secondary" text=" ثبت "/>
					<Button onclick={closeModal} sty="danger" text=" انصراف "/>
				</div>
			</form>
		</div>
    );
}
export default DelContractType;