import React, { useState } from 'react'
import useRequest from '../../components/fetchReq'
import { useQuery } from 'react-query'
import { useEmployeeGetAllSummery } from '../../hooks/index' 
import ContractsView from './contractsView'

const Contracts = () => {
    const employees = useEmployeeGetAllSummery() 
    const [temp,setTemp] = useState(null)
    const searched = useQuery(["contractFindByUser", temp],useRequest({
        url:`api/Contract/ContractFindByEmployee?CodeOrFamily=${temp}`,
        method:"GET",
        body: ''
    }),
    {
        enabled: Boolean(temp),
    }
    )
    const initialValues = {
		searchedTemp : ''
	}
	const onSubmit = (values) => {
        setTemp(values.searchedTemp)
  	}
    const searchHandler = (value) => {
        setTemp(value)
    } 
    if (employees.isLoading) return 'Loading...'
   	if (employees.error) return 'An error has occurred: ' + employees.error.message
    return (
        <ContractsView
            initialValues={initialValues}
            onSubmit={onSubmit}
            isLoading={searched.isLoading}
            result={searched.data ? searched.data.data : []}
            searchHandler={searchHandler}
            employees={employees.data.data}
            // searchedChanges={searchedChanges}
        />
    );
}
export default Contracts;