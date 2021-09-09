import { useMutation, useQueryClient } from "react-query";
import * as Yup from 'yup'
import React, { useState } from "react"
import { toast } from "react-toastify"
import useRequest from "../../../components/fetchReq";
import AddBimeTypeView from "./addBimeTypeView";

const AddBimeTypes = ({closeModal}) => {
	const queryClient = useQueryClient()
	const [formState, setFormState] = useState(null)
	const mutation = useMutation(useRequest({
        url:"api/Insurance/InsuranceAdd",
        method:"POST",
        body: formState
    }), {
        onSuccess: (res) => {
			toast.success(res.data.message)
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
		insuranceName: "",
		workshopName: "",
		workshopCode: "",
		employer: "",
		employerSharedPercent: null,
		employeeSharedPercent: null
	}
    const validationSchema = Yup.object({
		insuranceName: Yup.string().required('فیلد اجباری است'),
        workshopCode: Yup.string().required('فیلد اجباری است').nullable()
    })
	const onSubmit = (values) => {
        setFormState({
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
		<AddBimeTypeView
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
			closeModal={closeModal}
        />
    );
}
export default AddBimeTypes;