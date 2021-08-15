import { useQuery } from "react-query"
import React, { useState, useCallback } from 'react'
import useRequest from "../../components/fetchReq"
import Button from "../../utils/button"
import BreadCrumb from '../breadCrumb/breadCrumb'
import Modal from 'react-modal'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import '@inovua/reactdatagrid-community/index.css'
import '@inovua/reactdatagrid-community/base.css'
import '@inovua/reactdatagrid-community/theme/default-light.css'
import classes from './salaryItems.module.css'
import DelSalaryItems from "./delSalaryItems"
import EditSalaryItems from "./editSalaryItems"
const gridStyle = { 
    minHeight: 250 ,
}
const SalaryItems = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [delId,setDelId] = useState(null)
	const [editId,setEditId] = useState(null)
	const [modalDetHandler, setModalDetHandler] = useState(null)
	const breadCrumb = [
        {
            text: " ادمین " ,
            link: "/admin",
            active: 0
        },
        {
            text: " داشبورد " ,
            link: "/admin/MainPage",
            active: 0
        },
        {
            text: " آیتم های حقوق " ,
            link: "/admin/MainPage/salaryItems",
            active: 1
        }
    ]
    const columns = [
        { name: 'title', header: ' عنوان ', defaultFlex:1},
		{ name: 'detailName', header: ' عنوان نمایشی ', defaultFlex:1},
		{ name: 'formula', header: ' نوع ', defaultFlex:1},
        { header: ' حذف ', defaultFlex:1 ,render:({data}) => <Button onclick={() => delModalHandler(data)} text=" حذف " sty="danger"/>},
        { header: ' ویرایش ', defaultFlex:1 ,render:({data}) => <Button onclick={() => editModalHandler(data)} text=" ویرایش " sty="secondary"/>}
    ];
    const { isLoading, error, data } = useQuery('showSalaryItems', useRequest({
		url: 'api/Salary/ShowSalaryItems',
		method: 'POST',
		body: "",
	}))
   	if (isLoading) return 'Loading...'
   	if (error) return 'An error has occurred: ' + error.message
    console.log(data.data)
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
    return (
        <div className="w-100 d-flex flex-column align-items-start">
            <BreadCrumb data={breadCrumb}/>
			<Modal
				isOpen={modalIsOpen}
				className={`${classes.content} col-md-6 col-sm-8 col-10`}
           		overlayClassName={`${classes.overlay}`}
			>
				{
                	// modalDetHandler === 1 ? <AddMaliat closeModal={modalHandler}/>:
                	modalDetHandler === 0 ? <DelSalaryItems id={delId} closeModal={modalHandler}/>:
                	modalDetHandler === 2 ? <EditSalaryItems id={editId} closeModal={modalHandler}/>:
                	null
            	}
			</Modal>
            <div className="w-100">
                <div className="mb-3">
                    <Button onclick={addModalHandler} text="اضافه کردن آیتم حقوق" sty="primary"/>
                </div>
                <ReactDataGrid
                    theme="default-light"
                    idProperty="id"
                    rtl={true}
                    style={gridStyle}
                    columns={columns}
                    dataSource={data.data}
                />
            </div>
        </div>
    );
}
export default SalaryItems;