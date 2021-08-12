import { useQuery } from "react-query"
import React, { useState, useCallback } from 'react'
import useRequest from "../../components/fetchReq"

const ShowSalaryItems = () => {
    const { isLoading, error, data } = useQuery('showSalaryItems', useRequest({
		url: 'api/Salary/ShowSalaryItems',
		method: 'POST',
		body: "",
	}))
   	if (isLoading) return 'Loading...'
   	if (error) return 'An error has occurred: ' + error.message
    console.log(data.data)
    return (
        <div>
            نمایش آیتم های حقوق
        </div>
    );
}
export default ShowSalaryItems;