import AddContractView from "./addContractView";
import {  useContractTypesGetAll, useHireTypesGetAll, useListOfContractDetailsTypes } from '../../../hooks/index'
import * as Yup from 'yup'
import { toast } from "react-toastify";
import React, { useState } from "react";
import useRequest from "../../../components/fetchReq";
import { useMutation, useQueryClient } from "react-query";
import { changeFormat, useGetNowJalalyObj } from "../../../hooks/dateHooks"

const AddContract = ({ closeModal }) => {
    const queryClient = useQueryClient()
    const cotractTypes =  useContractTypesGetAll()
    const contractDetailTypes = useListOfContractDetailsTypes()
    const hireTypes = useHireTypesGetAll()
    const hireTypeOptions = [{ title: 'انتخاب کنید', value: ''}]
    const contractTypeOptions = [{ title: 'انتخاب کنید', value: ''}]
    const contractDetailsTypeOptions = []
    const [formState, setFormState] = useState(null)
    const mutation = useMutation(useRequest({
        url:"api/Contract/ContractAddForUser",
        method:"POST",
        body: formState
    }), {
        onSuccess: (res) => {
			toast.success(res.data.message)
			queryClient.refetchQueries({ stale: true })
            closeModal()
        },
        onError: (error) => {
            toast.error(error.response.data.message)
        }
    }
    )
    const [selected, setSelected] = useState([])
    const onChange = (value) => {
        setSelected(value)
    }
    const onSubmit = (values) => {
        console.log(values)
        console.log(changeFormat(values.effectiveDate))
        setFormState({
            contractTypeId: Number(values.contractTypeId),
            hireTypeID: Number(values.hireTypeID),
            executeDate: changeFormat(values.executeDate),
            effectiveDate: changeFormat(values.effectiveDate),
            contractDetails: values.contractDetails,
            employeeIds: selected
        })
        mutation.mutate()
  	}
    
    if (hireTypes.isLoading || cotractTypes.isLoading || contractDetailTypes.isLoading) return 'Loading...'
   	if (hireTypes.error ) return 'An error has occurred: ' + hireTypes.error.message
   	if (cotractTypes.error) return 'An error has occurred: ' + cotractTypes.error.message
   	if (contractDetailTypes.error) return 'An error has occurred: ' + contractDetailTypes.error.message
    hireTypes.data.data.map(item => {
        hireTypeOptions.push({ title : item.detailName, value : item.id })
    })
    cotractTypes.data.data.map(item => {
        contractTypeOptions.push({ title : item.detailName, value : item.id })
    })
    contractDetailTypes.data.data.map(item => {
        contractDetailsTypeOptions.push({
            itemTitle: item.detailName,
            itemValue: 0
        })
    })
    
    const validationSchema = Yup.object({ 
		contractTypeId: Yup.number().required('فیلد اجباری است'),
        hireTypeID: Yup.number().required('فیلد اجباری است'),
        executeDate: Yup.object().required('فیلد اجباری است'),
        effectiveDate: Yup.object().required('فیلد اجباری است')
    })
    const initialValues = {
        contractTypeId: '',
        hireTypeID: '',
        executeDate: "",
        effectiveDate: "",
        contractDetails: contractDetailsTypeOptions   
    }
    
    return (
        <AddContractView
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            closeModal={closeModal}
            hireTypeOptions={hireTypeOptions}
            contractTypeOptions={contractTypeOptions}
            selected={selected}
            onChange={onChange}
        />
    );
}

export default AddContract;