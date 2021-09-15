import EditLoanTypeView from "./editLoanTypeView";
import * as Yup from 'yup'
import { toast } from "react-toastify";
import React, { useState } from "react";
import useRequest from "../../../../components/fetchReq";
import { useMutation, useQueryClient } from "react-query";

const EditLoanType = ({ closeModal, data }) => {
    const queryClient = useQueryClient()
    const [formState, setFormState] = useState(null)
    const mutation = useMutation(useRequest({
        url:"api/Loan/LoanTypeUpdate",
        method:"PUT",
        body: formState
    }), {
        onSuccess: (res) => {
			toast.success(' عملیات با موفقیت انجام شد ')
			queryClient.refetchQueries({ stale: true })
            closeModal()
        },
        onError: (error) => {
            toast.error(error.response.data.message)
        }
    }
    )
    const onSubmit = (values) => {
        console.log(values)
        setFormState(values)
        mutation.mutate()
  	}

    const validationSchema = Yup.object({
		title: Yup.string().required('فیلد اجباری است'),
        amount: Yup.number().required('فیلد اجباری است').min(1,'بیشتر از صفر ! ').nullable(),
        installmentCount: Yup.number().required('فیلد اجباری است').min(1,'بیشتر از صفر ! ').nullable(),
        profitPercent: Yup.number().required('فیلد اجباری است').min(0,'حداقل 0').max(100, 'حداکثر 100').nullable(),
    })

    const initialValues = data

    return (
        <EditLoanTypeView
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
            closeModal={closeModal}
        />
    );
}

export default EditLoanType;