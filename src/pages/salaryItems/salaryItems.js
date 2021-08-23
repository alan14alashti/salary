import React, { useState } from 'react'
import Button from "../../utils/button"
import BreadCrumb from '../breadCrumb/breadCrumb'
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
	// const breadCrumb = [
    //     {
    //         text: " ادمین " ,
    //         link: "/admin",
    //         active: 0
    //     },
    //     {
    //         text: " داشبورد " ,
    //         link: "/admin/MainPage",
    //         active: 0
    //     },
    //     {
    //         text: " آیتم های حقوق " ,
    //         link: "/admin/MainPage/salaryItems",
    //         active: 1
    //     }
    // ]
    const columns = [
        { name: 'title', defaultFlex:1, header: ' عنوان '},
		{ name: 'detailName', defaultFlex:1, header: ' عنوان نمایشی '},
		{ name: 'formula',defaultFlex:3, header: ' فرمول '},
        { header: ' حذف ', defaultFlex:1, render:({data}) => <Button onclick={() => delModalHandler(data)} text=" حذف " sty="danger"/>},
        { header: ' ویرایش ', defaultFlex:1, render:({data}) => <Button onclick={() => editModalHandler(data)} text=" ویرایش " sty="secondary"/>}
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
            {/* <BreadCrumb data={breadCrumb}/> */}
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