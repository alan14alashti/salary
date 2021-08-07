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
import RegisterLoan from "./registerLoan"
import classes from './loanTypes.module.css'
import BreadCrumb from "../breadCrumb/breadCrumb"
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
	const [registerIsOpen, setRegisterIsOpen] = useState(false);
	const modalHandler = () => {
        setRegisterIsOpen(!registerIsOpen)
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
        { name: 'masterId', header: ' masterId ', defaultFlex:1},
		{ name: 'detailName', header: ' نام جزییات ', defaultFlex:1},
		{ name: 'detailValue', header: ' مقدار جزییات ', defaultFlex:1},
		{ name: 'description', header: ' توضیحات ', defaultFlex:1},
		{ name: 'id', header: ' # ', defaultFlex:1, render: ({ data }) => <div><Button sty="danger" text="حذف"/> <Button sty="secondary" text="ویرایش"/></div>},
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
				isOpen={registerIsOpen}
				className={`${classes.content} col-xl-3 col-lg-4 col-md-6 col-sm-8 col-10`}
           		overlayClassName={`${classes.overlay}`}
			>
				<div onClick={modalHandler}>
					<i className="fas fa-times"></i>
				</div>
				<RegisterLoan/>
			</Modal>
			<div className="w-100">
				<div className="mb-3">
					<Button text="اضافه کردن وام" onclick={modalHandler} sty="primary"/>
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