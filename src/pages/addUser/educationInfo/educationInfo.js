import { useQuery, useMutation } from "react-query"
import axios from "axios"
import { BaseUrl } from "../../../utils/baseUrl"
import React, { useState, useCallback } from 'react'
import Button from "../../../utils/button"
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import '@inovua/reactdatagrid-community/index.css'
import '@inovua/reactdatagrid-community/base.css'
import '@inovua/reactdatagrid-community/theme/default-light.css'
const gridStyle = { 
    minHeight: 250 ,
}
// const getUsers = async () => {
// 	const token = localStorage.getItem("accessToken")
//     const res =await 
// 		axios(`${BaseUrl}/api/Authenticate/listOfUsers`, {
// 		   method:'POST',
// 		   headers: {
// 			   "Content-Type": "application/json"	,
// 			   "accept": "*/*",
// 			   'Authorization':`Bearer ${token}`
// 		   },                                   
// 		   data : ""
// 	    })
//     return res
// }

const EducationInfo = () => {
    const columns =  [
        { name: 'title', header: ' عنوان ', defaultFlex:1},
		{ name: 'date', header: ' تاریخ ', defaultFlex:1},
		{header: ' حذف ', defaultFlex:1 ,render:({data}) => <Button text=" حذف " sty="danger"/>},
        {header: ' ویرایش ', defaultFlex:1 ,render:({data}) => <Button text=" ویرایش " sty="secondary"/>},
    ]
    const phoneNumbers = [
        {title: "تحصیلی", date: "1391/11/01"},
        {title: "دوره شبکه", date: "1400/02/03"}

    ]
    // const { isLoading, error, data } = useQuery('listOfUsers', getUsers)
    // const mutation = useMutation(getfetcher, {
    //     onSuccess : (res) => {
    //         setSearched(res.data)    
    //     }
    // })
    // const addPhoneNum = (e) => {
    //     mutation.mutate()
    // }
    return (
        <div className="w-100 d-flex flex-column align-items-start">
            <div className="w-100">
                <div className="mb-3">
                    <Button text="اضافه کردن اطلاعات تحصیلی" sty="primary"/>
                </div>
                <ReactDataGrid
                    theme="default-light"
                    idProperty="id"
                    rtl={true}
                    style={gridStyle}
                    columns={columns}
                    dataSource={phoneNumbers}
                />
            </div>
        </div>
    );
}
export default EducationInfo;