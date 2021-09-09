import { useState } from "react"
import useRequest from '../../../components/fetchReq'
import { toast } from "react-toastify"
import { useQueryClient, useMutation } from "react-query"
import EditContractTypeView from "./editContractTypeView"
import * as Yup from "yup"

const EditContractType = ({ closeModal, data }) => {
    const queryClient = useQueryClient()
    const [formState, setFormState] = useState({
        id: data.id,
        detailName: ""
    })
    const mutation = useMutation(useRequest({
        url:"api/Contract/ContractDetailUpdate",
        method:"PUT",
        body: formState
    }), {
        onSuccess: (res) => {
            
			toast.success(' عملیات با موفقیت انجام شد ')
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
		detailName : data.detailName
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
		<EditContractTypeView
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            closeModal={closeModal}
        />
    );
}
export default EditContractType;