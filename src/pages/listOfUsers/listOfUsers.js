import React, { useState } from 'react'
import useRequest from '../../components/fetchReq'
import { useQuery } from 'react-query'
import ListOfUsersView from './listOfUsersView'

const ListOfUsers = () => {
    const [temp,setTemp] = useState(null)
    const searched = useQuery(["employeeSearchByTemp", temp],useRequest({
        url:`api/Employee/EmployeeSearchSummery?temp=${temp}`,
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
    return (
        <ListOfUsersView
            initialValues={initialValues}
            onSubmit={onSubmit}
            isLoading={searched.isLoading}
            result={searched.data ? searched.data.data : []}
            searchHandler={searchHandler}
        />
    );
}
export default ListOfUsers;