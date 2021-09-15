import Modal from 'react-modal'
import React, { useState } from 'react'
import DataGrid from '../../../utils/dataGrid'
import Button from "../../../utils/button"
import AddLoanTypes from "./addLoanType/addLoanType"
import classes from './loanTypes.module.css'
import { DeleteIcon, EditIcon } from '../../../utils/iconButton'
import DelLoanType from "./delLoanType/delLoanType"
import EditLoanType from "./editLoanType/editLoanType"

const gridStyle = { 
    minHeight: 250 ,
}

const LoanTypesView = ({data}) => {
    const columns =  [
		{ name: 'title', header: ' نام ', defaultFlex:1},
		{ name: 'amount', header: ' مبلغ ', defaultFlex:1},
		{ name: 'installmentCount', header: ' تعداد قسط ', defaultFlex:1},
        { name: 'profitPercent', header: ' درصد بهره ', defaultFlex:1},
        { name: 'id', header: ' # ', maxWidth: 60, defaultFlex:1 ,render:({data}) => <EditIcon onclick={() => editModalHandler(data)}/>},
        { name: 'subimssionDate', header: ' # ', maxWidth: 60, defaultFlex:1 ,render:({data}) => <DeleteIcon onclick={() => delModalHandler(data)}/>}
    ];
    const [delId,setDelId] = useState(null)
	const [editData,setEditData] = useState(null)
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
		setEditData(data)
        setModalIsOpen(true)
        setModalDetHandler(2)
    }
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
                	modalDetHandler === 2 ? <EditLoanType data={editData} closeModal={modalHandler}/>:
                	null
            	}
			</Modal>
			<div className="w-100">
				<div className="d-flex justify-content-end m-2">
					<Button text="جدید" onclick={addModalHandler} sty="primary"/>
				</div>
				<DataGrid data={data} columns={columns} gridStyle={gridStyle}/>
			</div>
        </div>
    );
}
 
export default LoanTypesView;