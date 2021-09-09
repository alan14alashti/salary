import { useQueryClient, useMutation } from "react-query";
import useRequest from "../../../components/fetchReq";
import DelMaliatView from "./delMaliatView";
import { toast } from "react-toastify";
const DelMaliat = ({ id, closeModal }) => {
    const queryClient = useQueryClient()
    const mutation = useMutation(useRequest({
		url: `api/Tax/TaxDelete?id=${id}`,
		method: 'DELETE',
		body: "",
	}), {
        onSuccess: (res) => {
            toast.success(res.data.message)
            queryClient.refetchQueries({ stale: true })
            closeModal()
        },
        onError: (error) => {
            toast.error('مشکلی وجود دارد')
        }
    })
	const onSubmit = () => {
        mutation.mutate()
  	}
    return (
        <DelMaliatView
            closeModal={closeModal}
            onSubmit={onSubmit}
        />
    );
}
export default DelMaliat;