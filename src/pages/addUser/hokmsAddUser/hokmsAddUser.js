import { useMutation, useQuery } from "react-query"
import axios from "axios"
import { BaseUrl } from "../../../utils/baseUrl"
import React, { useState, useCallback } from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import '@inovua/reactdatagrid-community/index.css'
import '@inovua/reactdatagrid-community/base.css'
import '@inovua/reactdatagrid-community/theme/default-light.css'
import Button from "../../../utils/button"
import { Input } from "../../../utils/input"
import FormModal from "../../../utils/formModal"
const gridStyle = { 
    minHeight: 250 ,
}
const getfetcher = async (userName) => {
	const token = localStorage.getItem("accessToken")
    const res =await 
		axios(`${BaseUrl}/api/Contract/FindContractByUser?username=${userName.queryKey[1]}`, {
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
const HokmsAddUser = ({ userName }) => { 
    const columns =  [
		{ name: 'subimssionDate', header: ' تاریخ ثبت ', defaultFlex:1 },
		{ name: 'effectiveDate', header: ' تاریخ اثر گذاری ', defaultFlex:1 },
        { name: 'executeDate', header: ' تاریخ اجرا  ', defaultFlex:1 },
        { header: " حذف ", defaultFlex:1, render: ({ }) => <div><Button  sty="danger" text=" حذف "/></div>},
        { header: " ویرایش ", defaultFlex:1, render: ({ }) => <div><Button  sty="secondary" text=" ویرایش "/></div>}
    ];
    const { isLoading, error, data } = useQuery(['hokmByUser',userName], getfetcher)
    if (isLoading) return "Loading..."
    return (
        <ReactDataGrid
            theme="default-light"
            idProperty="id"
            rtl={true}
            style={gridStyle}
            columns={columns}
            dataSource={data.data ? data.data : []}
        />
    );
}
export default HokmsAddUser;