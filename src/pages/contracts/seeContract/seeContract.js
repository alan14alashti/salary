import SeeContractView from "./seeContractView"
import {  useContractTypesGetAll, useHireTypesGetAll, useListOfContractDetailsTypes } from '../../../hooks/index'
import React from "react"
import { changeJalalyToMilady } from "../../../hooks/dateHooks"

const SeeContract = ({ closeModal, data }) => {
    const cotractTypes =  useContractTypesGetAll()
    const contractDetailTypes = useListOfContractDetailsTypes()
    const hireTypes = useHireTypesGetAll()
    const hireTypeOptions = [{ title: 'انتخاب کنید', value: ''}]
    const contractTypeOptions = [{ title: 'انتخاب کنید', value: ''}]
    const contractDetailsTypeOptions = []
    if (hireTypes.isLoading || cotractTypes.isLoading || contractDetailTypes.isLoading) return 'Loading...'
   	if (hireTypes.error ) return 'An error has occurred: ' + hireTypes.error.message
   	if (cotractTypes.error) return 'An error has occurred: ' + cotractTypes.error.message
   	if (contractDetailTypes.error) return 'An error has occurred: ' + contractDetailTypes.error.message
    hireTypes.data.data.map(item => {
        hireTypeOptions.push({ title : item.detailName, value : item.id })
    })
    cotractTypes.data.data.map(item => {
        contractTypeOptions.push({ title : item.detailName, value : item.id })
    })
    contractDetailTypes.data.data.map(item => {
        contractDetailsTypeOptions.push({
            itemTitle: item.detailName,
            itemValue: 0
        })
    })
    const initialValues = {
        contractTypeId: data.contractTypeId,
        hireTypeID: data.hireTypeID,
        executeDate: changeJalalyToMilady(data.executeDate),
        effectiveDate: changeJalalyToMilady(data.effectiveDate),
        contractDetails: data.contractDetails   
    }
    return (
        <SeeContractView
            initialValues={initialValues}
            closeModal={closeModal}
            hireTypeOptions={hireTypeOptions}
            contractTypeOptions={contractTypeOptions}
            contractDetailsTypeOptions={contractDetailsTypeOptions}
        />
    );
}

export default SeeContract;