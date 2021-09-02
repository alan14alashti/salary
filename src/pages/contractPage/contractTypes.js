import React, { useState, useCallback } from 'react'
import DataGrid from '../../utils/dataGrid'
import Button from "../../utils/button"
import BreadCrumb from "../breadCrumb/breadCrumb"
import DelContractType from "./delContractType"
import FormModal from "../../utils/formModal"
import EditContractItem from "./editContractType"
import AddContractItem from "./addContratType"
import { useListOfContractTypes } from "../../hooks"
import { EditIcon, DeleteIcon } from '../../utils/iconButton'
const gridStyle = { 
    minHeight: 450 ,
}
const ContractTypes = () => {

    const [modalDetHandler, setModalDetHandler] = useState(null)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [delContractId, setDelContractId] = useState(null)
    const [editContractId, setEditContractId] = useState(null)
    const modalHandler = () => {
        setModalIsOpen(!modalIsOpen)
    }
    const delContract = (data) => {
        setDelContractId(data.id)
        setModalDetHandler(0)
        setModalIsOpen(true)
    }
    const editContract = (data) => {
        setEditContractId(data.id)
        setModalDetHandler(2)
        setModalIsOpen(true)
    }
    const addContract = (data) => {
        setModalDetHandler(1)
        setModalIsOpen(true)
    }
	const columns =  [
        { name: 'name', header: ' نام حکم ', defaultFlex: 1},
        { header: ' # ', maxWidth: 60, defaultFlex:1 ,render:({data}) => <EditIcon />},
        { header: ' # ', maxWidth: 60, defaultFlex:1 ,render:({data}) => <DeleteIcon />}
    ];
    const { isLoading, error, data } = useListOfContractTypes()
   	if (isLoading) return 'Loading...'
   	if (error) return 'An error has occurred: ' + error.message
    const contracts = data.data
    return ( 
        <div className="w-100 d-flex bg-white flex-column align-items-start">
            <FormModal open={modalIsOpen} modalHandler={modalHandler}>
                {
                    modalDetHandler === 1 ? <AddContractItem/> :
                    modalDetHandler === 0 ? <DelContractType id={delContractId}/> :
                    modalDetHandler === 2 ? <EditContractItem id={editContractId}/> :
                    null
                }
            </FormModal>
			<div className="w-100">
                <div className="m-1">
                    <Button text="اضافه کردن حکم" onclick={addContract} sty="primary"/>
                </div>
                <DataGrid data={contracts} columns={columns} gridStyle={gridStyle}/>
			</div>
        </div>
    );
}
export default ContractTypes;