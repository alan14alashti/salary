import { useQueryClient, useMutation } from "react-query";
import * as Yup from 'yup'
import React, { useState } from "react"
import AddMaliatView from "./addMaliatView";
import { toast } from "react-toastify"
import useRequest from '../../../components/fetchReq'

const AddMaliat = ({ closeModal }) => {
    const queryClient = useQueryClient()
    const [formState,setFormState] = useState({

        taxTitle:"",
        taxDetails:[
            {
                fromIncome: null,
                toIncome: null,
                taxPercent: null
            }
        ]

    })
    const mutation = useMutation(useRequest({
        url:"api/Tax/TaxAdd",
        method:"POST",
        body: JSON.stringify(formState)
    }), {
        onSuccess: (res) => {
			toast.success(res.data.message)
            queryClient.refetchQueries({ stale: true })
            closeModal()
        },
        onError: (error) => {
            toast.error('مشکلی وجود دارد')
        }
    }
    )
    const onSubmit = (values, onSubmitProps) => {
        const newTaxDetails = []
        values.taxDetails.map(item => {
            newTaxDetails.push({
                fromIncome: item.fromIncome ? item.fromIncome : 0,
                toIncome: item.toIncome ? item.toIncome : 0,
                taxPercent: item.taxPercent ? item.taxPercent : 0
            })
        })
        setFormState({
            taxTitle: values.taxTitle,
            taxDetails: newTaxDetails
        })
		mutation.mutate() 
        onSubmitProps.setSubmitting(false)
    }
    const initialValues = {
        taxTitle: "",
        taxDetails: formState.taxDetails
    }
    const validationSchema = Yup.object({
        taxTitle: Yup.string().required('فیلد اجباری است'),
        taxDetails: Yup.array()
        .of(
        Yup.object().shape({
            taxPercent: Yup.number().required('فیلد اجباری').min(0,'حداقل 0').max(100, 'حداکثر 100').nullable(),
            fromIncome: Yup.number().required('فیلد اجباری').lessThan(Yup.ref('toIncome'),'از فیلد تا مبلغ بیشتر است').min(0,'مثبت!').nullable(),
            toIncome: Yup.number().required('فیلد اجباری').min(0,'مثبت!').nullable()
        },['fromIncome', 'toIncome'])
        )
        .required('')
        .min(1, ''),
    })

    return (
        <AddMaliatView
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={onSubmit}
            closeModal={closeModal}
        />
    );
}

export default AddMaliat;