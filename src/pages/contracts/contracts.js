import React, { useState, useCallback } from 'react'
import * as Yup from 'yup'
import { useContractFindByUser } from '../../hooks/index' 
import ContractsView from './contractsView'

const Contracts = () => {
    const [temp,setTemp] = useState("")
    // const [modalIsOpen, setModalIsOpen] = useState(false)
    // const modalHandler = () => {
    //     setModalIsOpen(!modalIsOpen)
    // }
    const searched = useContractFindByUser(temp)
    // const changeHandler = (e) => {
    //     setUserName(e.target.value)
        
    // }
    // const searchHandler = (e) => {
    //     e.preventDefault()
    //     mutation.mutate(userName,{onSuccess: (res) => {
    //         setSearched(res.data)
    //     }})
    // }

	
    const initialValues = {
		searchedTemp : ''
	}
    // const validationSchema = Yup.object({
	// 	searchedTemp: Yup.string().required('فیلد اجباری است')
    // })
	const onSubmit = (values) => {
        setTemp(values.searchedTemp)
  	}
    return (
        <ContractsView
            initialValues={initialValues}
            onSubmit={onSubmit}
            // validationSchema={validationSchema}
            result={searched ? searched : []}
        />
    );
}
export default Contracts;