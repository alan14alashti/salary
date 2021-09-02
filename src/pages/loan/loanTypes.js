import Modal from 'react-modal'
import React, { useState, useCallback } from 'react'
import DataGrid from '../../utils/dataGrid'
import Button from "../../utils/button"
import AddLoanTypes from "./addLoanType"
import classes from './loanTypes.module.css'
import { DeleteIcon, EditIcon } from '../../utils\/iconButton'
import DelLoanType from "./delLoanType"
import EditLoanType from "./editLoanType"
import { useListOfLoanTypes } from "../../hooks"
const gridStyle = { 
    minHeight: 250 ,
}
const ListOfLoanTypes = () => {
	const [delId,setDelId] = useState(null)
	const [editId,setEditId] = useState(null)
	const [modalDetHandler, setModalDetHandler] = useState(null)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const modalHandler = () => {
        setModalIsOpen(!modalIsOpen)
    }
    const addModalHandler = () => {
        setModalIsOpen(true)
        setModalDetHandler(1)
    }
    const delModalHandler = (data) => {
		setDelId(data.id)
        setModalIsOpen(true)
        setModalDetHandler(0)
    }
    const editModalHandler = (data) => {
		setEditId(data.id)
        setModalIsOpen(true)
        setModalDetHandler(2)
    }
	const columns =  [
		{ name: 'detailName', header: ' نام جزییات ', defaultFlex:1},
		{ name: 'detailValue', header: ' مقدار جزییات ', defaultFlex:1},
		{ name: 'description', header: ' توضیحات ', defaultFlex:1},
        { header: ' # ', maxWidth: 60, defaultFlex:1 ,render:({data}) => <EditIcon onclick={() => editModalHandler(data)}/>},
        { header: ' # ', maxWidth: 60, defaultFlex:1 ,render:({data}) => <DeleteIcon onclick={() => delModalHandler(data)}/>}
    ];
    const { isLoading, error, data } = useListOfLoanTypes()
   	if (isLoading) return 'Loading...'
   	if (error) return 'An error has occurred: ' + error.message
    return (
        <div className="w-100 d-flex flex-column align-items-start bg-white">
			<Modal
				isOpen={modalIsOpen}
				className={`${classes.content} col-xl-3 col-lg-4 col-md-6 col-sm-8 col-10`}
           		overlayClassName={`${classes.overlay}`}
			>
				{
                	modalDetHandler === 1 ? <AddLoanTypes closeModal={modalHandler}/>:
                	modalDetHandler === 0 ? <DelLoanType id={delId} closeModal={modalHandler}/>:
                	modalDetHandler === 2 ? <EditLoanType id={editId} closeModal={modalHandler}/>:
                	null
            	}
			</Modal>
			<div className="w-100">
				<div className="m-1">
					<Button text="اضافه کردن وام" onclick={addModalHandler} sty="primary"/>
				</div>
				<DataGrid data={data.data} columns={columns} gridStyle={gridStyle}/>
			</div>
        </div>
    );
}
export default ListOfLoanTypes;