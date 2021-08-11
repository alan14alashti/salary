import { useQuery } from "react-query"
import axios from "axios"
import { BaseUrl } from "../../utils/baseUrl"
import React, { useState, useCallback } from 'react'

const getfetcher = async () => {
	const token = localStorage.getItem("accessToken")
    const res =await 
		axios(`${BaseUrl}/api/Salary/ShowSalaryFormulaTypes`, {
		   method:'POST',
		   headers: {
			   "Content-Type": "application/json"	,
			   "accept": "*/*",
			   'Authorization':`Bearer ${token}`
		   },                                   
		   data : ""
	    })
    return res
}

const ShowSalaryFormulaTypes = () => {
    const { isLoading, error, data } = useQuery('showSalaryFormulaTypes', getfetcher)
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