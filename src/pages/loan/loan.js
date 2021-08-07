import { useQuery } from "react-query"
import axios from "axios"
import { BaseUrl } from "../../utils/baseUrl"
import React, { useState, useCallback } from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import '@inovua/reactdatagrid-community/index.css'
import '@inovua/reactdatagrid-community/base.css'
import '@inovua/reactdatagrid-community/theme/default-light.css'
import Button from "../../utils/button"
import BreadCrumb from "../breadCrumb/breadCrumb"
const gridStyle = { 
    minHeight: 250 ,
}
const getfetcher = async () => {
	const token = localStorage.getItem("accessToken")
    const res =await 
		axios(`${BaseUrl}/api/Loan/ListofLoans`, {
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
const Loan = () => {
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
            text: " وام ها " ,
            link: "/admin/MainPage",
            active: 1
        }
    ]
	const columns =  [
        { name: 'title', header: ' عنوان وام ', defaultFlex:1},
		{ name: 'amount', header: ' مقدار ', defaultFlex:1},
		{ name: 'defaultInstallmentCount', header: ' تعداد قسط ', defaultFlex:1},
		{ name: 'subimssionDate', header: ' تاریخ ', defaultFlex:1},
        { name: 'id', header: ' # ', defaultFlex:1 ,render:({data}) => <Button text="تایید" onclick={console.log("تاییییییییییید")} sty="primary"/>},
    ];
    const { isLoading, error, data } = useQuery('listOfLoans', getfetcher
	)
   	if (isLoading) return 'Loading...'
   	if (error) return 'An error has occurred: ' + error.message
    const loans = data.data
    return ( 
        <div>
            <BreadCrumb data={breadCrumb}/>
            <ReactDataGrid
                theme="default-light"
                idProperty="id"
                rtl={true}
                style={gridStyle}
                columns={columns}
                dataSource={loans}
            />
        </div>
    );
}
export default Loan;