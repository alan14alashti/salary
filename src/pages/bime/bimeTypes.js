import Modal from 'react-modal'
import React, { useState } from 'react'
import DataGrid from "../../utils/dataGrid"
import Button from "../../utils/button"
import classes from './bimeTypes.module.css'
import { EditIcon, DeleteIcon } from '../../utils/iconButton'
import AddBimeTypes from "./addbimeType/addBimeType"
import { useInsuranceGetAlls } from "../../hooks"
import EditBimeTypes from './editBimeType/editBimeType'
import DelBimeType from './delBimeType/delBimeType'

const gridStyle = { 
    minHeight: 250 ,
}

const ListOfBimeTypes = () => {
	const [delId,setDelId] = useState(null)
	const [editData,setEditData] = useState(null)
	const [modalDetHandler, setModalDetHandler] = useState(null)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const modalHandler = () => {
        setModalIsOpen(!modalIsOpen)
    }
    const addModalHandler = () => {
        setModalIsOpen(!modalIsOpen)
        setModalDetHandler(1)
    }
    const delModalHandler = (data) => {
		setDelId(data.id)
        setModalIsOpen(!modalIsOpen)
        setModalDetHandler(0)
    }
    const editModalHandler = (data) => {
		setEditData(data)
        setModalIsOpen(!modalIsOpen)
        setModalDetHandler(2)
    }

	const columns =  [
        { name: 'insuranceName', header: ' نام ', defaultFlex:1},
		{ name: 'workshopName', header: ' نام کارگاه ', defaultFlex:1},
		{ name: 'employer', header: ' کارفرما ', defaultFlex:1},
		{ name: 'workshopCode', header: ' کد کارگاه ', defaultFlex:1},
		{ header: ' # ', maxWidth: 60, defaultFlex:1 ,render:({data}) => <EditIcon onclick={() => editModalHandler(data)}/>},
        { header: ' # ', maxWidth: 60, defaultFlex:1 ,render:({data}) => <DeleteIcon onclick={() => delModalHandler(data)}/>}
    ];
	
    const { isLoading, error, data } = useInsuranceGetAlls()
	console.log(data)
   	if (isLoading) return 'Loading...'
   	if (error) return 'An error has occurred: ' + error.message
    return (
        <div className="w-100 bg-white d-flex flex-column align-items-start">
			<Modal
				isOpen={modalIsOpen}
				className={`${classes.content} col-xxl-3 col-xl-4 col-lg-5 col-sm-6 col-10`}
           		overlayClassName={`${classes.overlay}`}
			>
				{
                	modalDetHandler === 1 ? <AddBimeTypes closeModal={modalHandler}/>:
                	modalDetHandler === 0 ? <DelBimeType id={delId} closeModal={modalHandler}/>:
                	modalDetHandler === 2 ? <EditBimeTypes closeModal={modalHandler} data={editData}/>:
                	null
            	}
			</Modal>
			<div className="w-100">
				<div className="m-1">
					<Button text="اضافه کردن بیمه" onclick={addModalHandler} sty="primary"/>
				</div>
				<DataGrid data={data.data} columns={columns} gridStyle={gridStyle}/>
			</div>
        </div>
    );
}
export default ListOfBimeTypes; 