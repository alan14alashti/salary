import { useState } from "react"
import useRequest from '../../../components/fetchReq'
import { toast } from "react-toastify"
import { useQueryClient, useMutation } from "react-query"
import AddContractTypeView from "./addContractTypeView"
import * as Yup from "yup"

const AddContractItem = ({closeModal}) => {
    const queryClient = useQueryClient()
    const [formState, setFormState] = useState(null)
    const mutation = useMutation(useRequest({
        url:"api/Contract/ContractDetailAdd",
        method:"POST",
        body: formState
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
    const initialValues = {
		detailName : ""
	}
    const validationSchema = Yup.object({
		detailName: Yup.string().required('فیلد اجباری است')
    })
	const onSubmit = (values) => {
        setFormState({
            ...formState,
            detailName: values.detailName
        })
        mutation.mutate()
  	}
    return (
		<AddContractTypeView
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            closeModal={closeModal}
        />
    );
}
export default AddContractItem;