import { useLocationChart, useOrgChart, useEmployeeGetAllSummery } from "../../../../hooks";
import SubmitForEmployeeView from "./submitForEmployeeView";
import { useEmployeeSearchSummery  } from "../../../../hooks";
import { useState } from "react";

const SubmitForEmployees = ({ closeModal, selected, onChange }) => {
    // const [ temp, setTemp] = useState(null)
    const options = []
    const orgChart = useOrgChart()
    const orgUnit = useLocationChart()
    const employees = useEmployeeGetAllSummery()

    // if(searched.isSuccess){
        
    // }
    const orgChartOptions = [{ title: 'انتخاب کنید', value: ''}]
    const orgUnitOptions = [{ title: 'انتخاب کنید', value: ''}]
    if(orgChart.isLoading || orgUnit.isLoading || employees.isLoading) return 'Loading...'
    if(orgUnit.error) return 'An error has occurred: ' + orgUnit.error.message
    if(orgChart.error) return 'An error has occurred: ' + orgChart.error.message
    if(employees.error) return 'An error has occurred: ' + employees.error.message
    orgChart.data.data.map(item => {
        orgChartOptions.push({ title : item.title, value : item.id })
    })
    orgUnit.data.data.map(item => {
        orgUnitOptions.push({ title : item.unitName, value : item.id })
    })
    const initialValues = {
        familyName:''
    }
    // const onSubmit = (values) => {
    //     console.log(values)
    //     setTemp(values.familyName)
    // }
    // const optionsHandler = (data) => {
    //     console.log(searched.data.data)
    //     // searched.data.data.filter(item => data.value != item.value)
    //     console.log(searched.data.data)
    // }
    return (
        <SubmitForEmployeeView
            initialValues={initialValues}
            // onSubmit={onSubmit}
            closeModal={closeModal}
            orgChartOptions={orgChartOptions}
            orgUnitOptions={orgUnitOptions}
            // result={searched.data ? searched.data.data : []}
            result={employees.data.data.map(item => {
                return {value: item.id, label: item.family + '(' + item.personalCode + ')'}
            })}
            selected={selected}
            onChange={onChange}
        />
    );
}
 
export default SubmitForEmployees;