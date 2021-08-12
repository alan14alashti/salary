import { useQuery } from "react-query"
import React, { useState, useCallback } from 'react'
import useRequest from "../../components/fetchReq"


const ShowSalaryFormulaTypes = () => {
    const { isLoading, error, data } = useQuery('showSalaryFormulaTypes', useRequest({
		url: 'api/Salary/ShowSalaryFormulaTypes',
		method: 'POST',
		body: "",
	}))
   	if (isLoading) return 'Loading...'
   	if (error) return 'An error has occurred: ' + error.message
    console.log(data.data)
    return (
        <div>
            نمایش انواع فرمول حقوق
        </div>
    );
}
 
export default ShowSalaryFormulaTypes;