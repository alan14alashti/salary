import { BaseUrl } from "../../utils/baseUrl";
import axios from "axios";
import { useQuery } from "react-query";
import classes from "./listOfUsers.module.css"
import React, { useState, useCallback } from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import '@inovua/reactdatagrid-community/index.css'
import Modal from 'react-modal'
import FormModal from "../../utils/formModal";
import Register from "../registerPage/register";
import '@inovua/reactdatagrid-community/base.css'
import '@inovua/reactdatagrid-community/theme/default-light.css'
import Button from "../../utils/button";
import BreadCrumb from "../breadCrumb/breadCrumb";
const getfetcher = async () => {
	const token = localStorage.getItem("accessToken")
    const res =await 
		axios(`${BaseUrl}/api/Authenticate/listOfUsers`, {
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
const gridStyle = { 
    minHeight: 550 ,
}
const ListOfUsers = () => {
    const [selected, setSelected] = useState({});
    const onSelectionChange = useCallback(({ selected }) => {
        setSelected(selected)
    }, [])
    console.log(selected)
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
            text: " کارمندان " ,
            link: "/admin/MainPage",
            active: 1
        }
    ]
    const [registerIsOpen, setRegisterIsOpen] = useState(false);
    const columns =  [
        { name: 'userName', header: ' نام کاربری ', defaultFlex:1},
        { name: 'role', header: ' نقش ', defaultFlex:1},
        { name: 'email', header: ' ایمیل ', defaultFlex:1},
        { name: 'phone', header: ' شماره تلفن ', defaultFlex:1},
        { name: 'id', header: ' # ' , defaultFlex:1, render: ({ data }) => <div><Button onclick={() => console.log(data)} sty="danger" text="حذف"/> <Button sty="secondary" text="ویرایش"/></div>},
    ];
    const modalHandler = () => {
        setRegisterIsOpen(!registerIsOpen)
    }
    const { isLoading, error, data } = useQuery('listOfUsers', getfetcher
	)
   	if (isLoading) return 'Loading...'
   	if (error) return 'An error has occurred: ' + error.message
    const users = data.data;
    return (
        <div className="">
        <BreadCrumb data={breadCrumb}/>
        <div className="my-3">
            <Button sty="primary" text="ساخت کارمند" onclick={modalHandler}/>
        </div>
        <FormModal open={registerIsOpen} modalHandler={modalHandler}>
            <Register/>
        </FormModal>
        <div>
            <ReactDataGrid
                selected={selected}
                checkboxColumn
                onSelectionChange={onSelectionChange}
                theme="default-light"
                idProperty="id"
                rtl={true}
                style={gridStyle}
                columns={columns}
                dataSource={users}
            />
        </div>
        </div>
    );
}
export default ListOfUsers;