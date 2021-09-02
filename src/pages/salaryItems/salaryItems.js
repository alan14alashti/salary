import React, { useState } from 'react'
import Button from "../../utils/button"
import { DeleteIcon, EditIcon } from '../../utils/iconButton'
import Modal from 'react-modal'
import DataGrid from '../../utils/dataGrid'
import classes from './salaryItems.module.css'
import DelSalaryItems from "./delSalaryItems"
import EditSalaryItems from "./editSalaryItems"
import AddSalaryItems from "./addSalaryItems"
import { useSalaryItems } from "../../hooks"
import SideNav from '../sideNav/sideNav'
const gridStyle = { 
    minHeight: 550 ,
}
const SalaryItems = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [delId,setDelId] = useState(null)
	const [editData,setEditData] = useState(null)
	const [modalDetHandler, setModalDetHandler] = useState(null)

    const columns = [
        { name: 'title', defaultFlex:1, header: ' عنوان '},
		{ name: 'detailName', defaultFlex:1, header: ' عنوان نمایشی '},
		{ name: 'formula',defaultFlex:3, header: ' فرمول '},
        { name:'id', header: '#', maxWidth: 60, defaultFlex:1 ,render:({data}) => <EditIcon onclick={() => editModalHandler(data)}/>},
        { name:'id', header: '#', maxWidth: 60, defaultFlex:1 ,render:({data}) => <DeleteIcon onclick={() => delModalHandler(data)}/>}
    ];
    const { isLoading, error, data } = useSalaryItems()
   	if (isLoading) return 'Loading...'
   	if (error) return 'An error has occurred: ' + error.message
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
        <div className="d-flex h-100">
            <Modal
				isOpen={modalIsOpen}
				className={`${classes.content} col-md-6 col-sm-8 col-10`}
           		overlayClassName={`${classes.overlay}`}
			>
				{
                	modalDetHandler === 1 ? <AddSalaryItems closeModal={modalHandler}/>:
                	modalDetHandler === 0 ? <DelSalaryItems id={delId} closeModal={modalHandler}/>:
                	modalDetHandler === 2 ? <EditSalaryItems data={editData} closeModal={modalHandler}/>:
                	null
            	}
			</Modal>
    
            {true ? <SideNav active="آیتم های حقوق"/> : null}
            <div className="container-fluid">
                <div className="d-flex justify-content-stretch bg-white py-3">
                    <div className="col-12">
                        <div className="mb-3">
                            <Button onclick={addModalHandler} text="اضافه کردن آیتم حقوق" sty="primary"/>
                        </div>
                        <div>
                            <DataGrid data={data.data} columns={columns} gridStyle={gridStyle}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SalaryItems;