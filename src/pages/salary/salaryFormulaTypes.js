import React, { useState, useCallback } from 'react'
import { useSalaryFormulaTypes } from "../../hooks"

const ShowSalaryFormulaTypes = () => {
    const { isLoading, error, data } = useSalaryFormulaTypes()
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