import React from 'react'
import { useListOfLoanTypes } from "../../../hooks"
import LoanTypesView from './loanTypesView'

const ListOfLoanTypes = () => {
    const { isLoading, error, data } = useListOfLoanTypes()
   	if (isLoading) return 'Loading...'
   	if (error) return 'An error has occurred: ' + error.message
	console.log(data)
    return (
        <LoanTypesView
			data={data.data}
		/>
    );
}
export default ListOfLoanTypes;