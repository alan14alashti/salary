import React, { cloneElement, useState } from 'react'
import DataGrid from '../../utils/dataGrid'
import Button from "../../utils/button"
import DelContractType from "./delContractType/delContractType"
import Modal from 'react-modal'
import classes from './contractType.module.css'
import EditContractType from "./editContractType/editContractType"
import AddContractType from "./addContractType/addContratType"
import { useListOfContractTypes } from "../../hooks"
import { EditIcon, DeleteIcon } from '../../utils/iconButton'
const gridStyle = { 
    minHeight: 450 ,
}
const ContractTypes = () => {

    const [modalDetHandler, setModalDetHandler] = useState(null)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [delContractId, setDelContractId] = useState(null)
    const [editContractData, setEditContractData] = useState(null)
    const closeModal = () => {
        setModalIsOpen(false)
    }
    const delContract = (data) => {
        setDelContractId(data.id)
        setModalDetHandler(0)
        setModalIsOpen(true)
    }
    const editContract = (data) => {
        setEditContractData(data)
        setModalDetHandler(2)
        setModalIsOpen(true)
    }
    const addContract = (data) => {
        setModalDetHandler(1)
        setModalIsOpen(true)
    }
	const columns =  [
        { name: 'detailName', header: ' نام حکم ', defaultFlex: 1},
        { header: ' # ', maxWidth: 60, defaultFlex:1 ,render:({data}) => <EditIcon onclick={() => editContract(data)}/>},
        { header: ' # ', maxWidth: 60, defaultFlex:1 ,render:({data}) => <DeleteIcon onclick={() => delContract(data)}/>}
    ];
    const { isLoading, error, data } = useListOfContractTypes()
   	if (isLoading) return 'Loading...'
   	if (error) return 'An error has occurred: ' + error.message
    const contracts = data.data
    return ( 
        <div className="w-100 d-flex bg-white flex-column align-items-start">
            <Modal
				isOpen={modalIsOpen}
				className={`${classes.content} col-xxl-3 col-xl-4 col-lg-5 col-sm-6 col-10`}
           		overlayClassName={`${classes.overlay}`}
			>
                {
                    modalDetHandler === 1 ? <AddContractType closeModal={closeModal}/> :
                    modalDetHandler === 0 ? <DelContractType closeModal={closeModal} id={delContractId}/> :
                    modalDetHandler === 2 ? <EditContractType closeModal={closeModal} data={editContractData}/> :
                    null
                }
            </Modal>
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