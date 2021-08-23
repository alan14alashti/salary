import { useMutation, useQuery } from "react-query"
import axios from "axios"
import { BaseUrl } from "../../../utils/baseUrl"
import React, { useState, useCallback } from 'react'
import DataGrid from "../../../utils/dataGrid"
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
const HokmsAddUser = ({ userName, BlurHandler }) => { 
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
        <DataGrid data={data.data ? data.data : []} columns={columns} gridStyle={gridStyle}/>
    );
}
export default HokmsAddUser;