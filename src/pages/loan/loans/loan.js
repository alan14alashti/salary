import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useEmployeeGetAllSummery } from '../../../hooks/index' 
import LoanView from './loanView'
import useRequest from '../../../components/fetchReq'

const Loan = () => {
    const [formState,setFormState] = useState({
        searchedTemp : null,
        checkOut: null,
        delete: null
    })
    console.log(formState)
    const employees = useEmployeeGetAllSummery()
    const searched = useQuery(['loanGetByTemp', formState.searchedTemp + ' ' + formState.delete + ' ' + formState.checkOut],useRequest({
        url:`api/Loan/LoanFindByEmployee?CodeOrFamily=${formState.searchedTemp}&IsCheckOut=${formState.checkOut}&IsDeleted=${formState.delete}`,
        method:"GET",
        body:""
    }),
    {
        enabled: Boolean(formState.searchedTemp),
    }
    )
    const initialValues = {
        checkOut: false,
        delete: false,
        searchedTemp : ''
	}
	const onSubmit = (values) => {
        console.log(values)
        setFormState(values)
  	}
    
    if (employees.isLoading) return 'Loading...'
   	if (employees.error) return 'An error has occurred: ' + employees.error.message

    return (
        <LoanView
            initialValues={initialValues}
            onSubmit={onSubmit}
            isLoading={searched.isLoading}
            result={searched.data ? searched.data.data : []}
            employees={employees.data.data}
        />
    );
}
export default Loan;