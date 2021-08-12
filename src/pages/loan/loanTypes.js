import { useQuery } from "react-query"
import axios from "axios"
import Modal from 'react-modal'
import { BaseUrl } from "../../utils/baseUrl"
import React, { useState, useCallback } from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import '@inovua/reactdatagrid-community/index.css'
import '@inovua/reactdatagrid-community/base.css'
import '@inovua/reactdatagrid-community/theme/default-light.css'
import Button from "../../utils/button"
import AddLoanTypes from "./addLoanType"
import classes from './loanTypes.module.css'
import BreadCrumb from "../breadCrumb/breadCrumb"
import DelLoanType from "./delLoanType"
import EditLoanType from "./editLoanType"
const gridStyle = { 
    minHeight: 250 ,
}
const getfetcher = async () => {
	const token = localStorage.getItem("accessToken")
    const res =await 
		axios(`${BaseUrl}/api/Loan/ListOfLoanTypes`, {
		   method:'POST',
		   headers: {
			   "Content-Type": "application/json"	,
			   "accept": "*/*",
			   'Authorization':`Bearer ${token}`
		   },                                   
		   data : ""
	    })
    return res
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
            text: " انواع وام " ,
            link: "/admin/MainPage/baseInfo/loanTypes",
            active: 1
        }
    ]
	const columns =  [
		{ name: 'detailName', header: ' نام جزییات ', defaultFlex:1},
		{ name: 'detailValue', header: ' مقدار جزییات ', defaultFlex:1},
		{ name: 'description', header: ' توضیحات ', defaultFlex:1},
		{ header: ' حذف ', defaultFlex:1, render: ({ data }) => <Button onclick={() => delModalHandler(data)} sty="danger" text="حذف"/>},
		{ header: ' ویرایش ', defaultFlex:1, render: ({ data }) => <Button onclick={() => editModalHandler(data)} sty="secondary" text="ویرایش"/>}
    ];
    const { isLoading, error, data } = useQuery('listOfLoanTypes', getfetcher
	)
   	if (isLoading) return 'Loading...'
   	if (error) return 'An error has occurred: ' + error.message
	const loanTypes = data.data
    return (
        <div className="w-100 d-flex flex-column align-items-start">
			<BreadCrumb data={breadCrumb}/>
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
				<div className="mb-3">
					<Button text="اضافه کردن وام" onclick={addModalHandler} sty="primary"/>
				</div>
				<ReactDataGrid
					theme="default-light"
					idProperty="id"
					rtl={true}
					style={gridStyle}
					columns={columns}
					dataSource={loanTypes}
				/>
			</div>
        </div>
    );
}
export default ListOfLoanTypes;