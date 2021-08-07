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
    minHeight: 550 ,
}
const getfetcher = async () => {
	const token = localStorage.getItem("accessToken")
    const res =await 
		axios(`${BaseUrl}/api/Contract/GetAllContracts`, {
		   method:'POST',
		   headers: {
			   "Content-Type": "application/json",
			   "accept": "*/*",
			   'Authorization':`Bearer ${token}`
		   },                                   
		   data : ""
	    })
    return res
}
const Hokms = () => {
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
            text: " حکم ها " ,
            link: "/admin/MainPage",
            active: 1
        }
    ]
	const columns =  [
        { name: 'userName', header: ' نام کاریری ', defaultFlex:1 },
		{ name: 'detailName', header: ' نام جزییات ', defaultFlex:1 },
		{ name: 'subimssionDate', header: ' تاریخ ثبت ', defaultFlex:1 },
		{ name: 'effectiveDate', header: ' تاریخ اثر گذاری ', defaultFlex:1 },
        { name: 'executeDate', header: ' تاریخ اجرا  ', defaultFlex:1 },
    ];
    const { isLoading, error, data } = useQuery('hokms', getfetcher
	)
   	if (isLoading) return 'Loading...'
   	if (error) return 'An error has occurred: ' + error.message
    const hokms = data.data
    return ( 
        <div>
            <BreadCrumb data={breadCrumb}/>
            <ReactDataGrid
                theme="default-light"
                idProperty="id"
                rtl={true}
                style={gridStyle}
                columns={columns}
                dataSource={hokms}
            />
        </div>
    );
}
export default Hokms;