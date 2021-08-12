import { useQuery, useMutation } from "react-query"
import axios from "axios"
import { BaseUrl } from "../../utils/baseUrl"
import React, { useState, useCallback } from 'react'
import Button from "../../utils/button"
import BreadCrumb from '../breadCrumb/breadCrumb'
import Modal from 'react-modal'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import '@inovua/reactdatagrid-community/index.css'
import '@inovua/reactdatagrid-community/base.css'
import '@inovua/reactdatagrid-community/theme/default-light.css'
import classes from './maliat.module.css'
import DelMaliat from "./delMaliat"
import EditMaliat from "./editMaliat"
import AddMaliat from "./addMaliat"
const gridStyle = { 
    minHeight: 250 ,
}


const Maliat = () => {
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
            text: " اطلاعات پایه " ,
            link: "/admin/MainPage/baseInfo",
            active: 0
        },
        {
            text: " لیست جداول مالیاتی " ,
            link: "/admin/MainPage/baseInfo/loanTypes",
            active: 1
        }
    ]
    const columns =  [
        { name: 'name', header: ' نام ', defaultFlex:1},
		{header: ' حذف ', defaultFlex:1 ,render:({data}) => <Button onclick={delModalHandler} text=" حذف " sty="danger"/>},
        {header: ' ویرایش ', defaultFlex:1 ,render:({data}) => <Button onclick={editModalHandler} text=" ویرایش " sty="secondary"/>},
    ]
    const maliatJadval = [
        {name: "جدول مالیاتی سال 99"},
        {name: "جدول مالیاتی سال 98" }
    ]
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
    
    return (
        <div className="w-100 d-flex flex-column align-items-start">
            <BreadCrumb data={breadCrumb}/>
			<Modal
				isOpen={modalIsOpen}
				className={`${classes.content} col-md-6 col-sm-8 col-10`}
           		overlayClassName={`${classes.overlay}`}
			>
				{
                	modalDetHandler === 1 ? <AddMaliat closeModal={modalHandler}/>:
                	modalDetHandler === 0 ? <DelMaliat id={delId} closeModal={modalHandler}/>:
                	modalDetHandler === 2 ? <EditMaliat id={editId} closeModal={modalHandler}/>:
                	null
            	}
			</Modal>
            <div className="w-100">
                <div className="mb-3">
                    <Button onclick={addModalHandler} text="اضافه کردن جدول مالیاتی" sty="primary"/>
                </div>
                <ReactDataGrid
                    theme="default-light"
                    idProperty="id"
                    rtl={true}
                    style={gridStyle}
                    columns={columns}
                    dataSource={maliatJadval}
                />
            </div>
        </div>
    );
}
export default Maliat;