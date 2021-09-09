import { useMutation, useQueryClient } from "react-query"
import * as Yup from 'yup'
import React, { useState } from "react"
import { toast } from "react-toastify"
import useRequest from "../../../components/fetchReq"
import EditBimeTypeView from "./editBimeTypeView"

const EditBimeTypes = ({closeModal, data}) => {
	const queryClient = useQueryClient()
	const [formState, setFormState] = useState({
        id:data.id,
		insuranceName:"",
        workshopName: "",
		workshopCode: "",
		employer: "",
		employerSharedPercent: null,
		employeeSharedPercent: null
    })
	const mutation = useMutation(useRequest({
        url:"api/Insurance/InsuranceUpdate",
        method:"PUT",
        body: formState
    }), {
        onSuccess: (res) => {
			console.log(res)
			toast.success(' عملیات با موفقیت انجام شد ')
			closeModal()
			queryClient.refetchQueries({ stale: true })
        },
        onError: (error) => {
			console.log(error.response)
            toast.error(error.response.data.message)
        }
    }
    )
	const initialValues = {
		id:data.id,
		insuranceName: data.insuranceName,
        workshopName: data.workshopName,
		workshopCode: data.workshopCode,
		employer: data.employer,
		employerSharedPercent: data.employerSharedPercent,
		employeeSharedPercent: data.employeeSharedPercent
	}
    const validationSchema = Yup.object({
        workshopCode: Yup.string().required('فیلد اجباری است').nullable()
    })
	const onSubmit = (values) => {
        setFormState({
            ...formState,
			insuranceName: values.insuranceName,
			workshopName: values.workshopName,
			workshopCode: values.workshopCode,
			employer: values.employer,
			employerSharedPercent: Number(values.employerSharedPercent),
			employeeSharedPercent: Number(values.employeeSharedPercent)
		})
        mutation.mutate()
  	}
    return (
		<EditBimeTypeView
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
			closeModal={closeModal}
		/>
    );
}
export default EditBimeTypes;