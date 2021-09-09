import { useQueryClient, useMutation } from "react-query";
import * as Yup from 'yup'
import React, { useState } from "react"
import EditMaliatView from "./editMaliatView";
import { toast } from "react-toastify"
import useRequest from '../../../components/fetchReq'
import { useTaxGetById } from "../../../hooks";

const EditMaliat = ({ closeModal, id }) => {
    const { isLoading, error, data } = useTaxGetById(id)
    const queryClient = useQueryClient()
    const [formState,setFormState] = useState({
        id: id,
        taxTitle: "",
        taxDetails: [
            
        ],
        subimssionDate: ""
    })
    const mutation = useMutation(useRequest({
        url:"api/Tax/TaxUpdate",
        method:"PUT",
        body: JSON.stringify(formState)
    }), {
        onSuccess: (res) => {
			toast.success(" عملیات با موفقیت انجام شد ")
            queryClient.refetchQueries({ stale: true })
            closeModal()
        },
        onError: (error) => {
            toast.error(" مشکلی وجود دارد ")
        }
    }
    )
    
    const onSubmit = (values, onSubmitProps) => {
        const newTaxDetails = []
        values.taxDetails.map(item => {
            newTaxDetails.push({
                fromIncome: item.fromIncome ? item.fromIncome : 0,
                toIncome: item.toIncome ? item.toIncome : 0,
                taxPercent: item.taxPercent ? item.taxPercent : 0,
                id: item.id,
                taxId: item.taxId,
            })
        })
        setFormState({
            ...formState,
            subimssionDate: data.data.subimssionDate,
            taxTitle: values.taxTitle,
            taxDetails: newTaxDetails
        })
		mutation.mutate() 
        onSubmitProps.setSubmitting(false)
    }
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    const initialTaxDetails = []
    data.data.taxDetails.map(item => {
        initialTaxDetails.push({
            fromIncome: item.fromIncome,
            id: item.id,
            taxId: item.taxId,
            taxPercent: item.taxPercent,
            toIncome: item.toIncome
        })
    })
    const initialValues = {
        taxTitle: data.data.taxTitle,
        taxDetails: initialTaxDetails
    }
    const validationSchema = Yup.object({
        taxTitle: Yup.string().required('فیلد اجباری است'),
        taxDetails: Yup.array()
        .of(
        Yup.object().shape({
            taxPercent: Yup.number().required('فیلد اجباری').min(0,'حداقل 0').max(100, 'حداکثر 100').nullable(),
            fromIncome: Yup.number().required('فیلد اجباری').lessThan(Yup.ref('toIncome'),'از فیلد تا مبلغ بیشتر است').positive('مثبت!').nullable(),
            toIncome: Yup.number().required('فیلد اجباری').positive('مثبت!').nullable()
        },['fromIncome', 'toIncome'])
        )
        .required('')
        .min(1, ''),
    })
    
    return (
        <EditMaliatView
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={onSubmit}
            data={data.data}  
            closeModal={closeModal}
        />
    );
}

export default EditMaliat;