import { useQuery, useMutation } from "react-query"
import Button from "../../utils/button"
import axios from "axios"
import { BaseUrl } from "../../utils/baseUrl"
import React, { useState, useCallback } from 'react'
import BreadCrumb from "../breadCrumb/breadCrumb";
import ReactDataGrid from '@inovua/reactdatagrid-community'
import CreateRole from "./createRole";
import Modal from 'react-modal'
import classes from './listOfRoles.module.css'
const getfetcher = async () => {
	const token = localStorage.getItem("accessToken")
    const res =await 
		axios(`${BaseUrl}/api/Authenticate/listOfRoles`, {
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
    minHeight: 850 ,
}
const ListOfRoles = () => {
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
            text: " اطلاعات پایه  " ,
            link: "/admin/MainPage/baseInfo",
            active: 0
        },
        {
            text: " نقش ها " ,
            link: "/admin/MainPage/baseInfo/ListOfRoles",
            active: 1
        }
    ]
    const columns =  [
        { name: 'id', header: ' شماره ', defaultFlex:1},
        { name: 'roleName', header: ' نام نقش ', defaultFlex:1}
    ];
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const modalHandler = () => {
        setModalIsOpen(!modalIsOpen)
    }
    // const addRole = () => {
    //     setModalIsOpen(true)
    // }
    const { isLoading, error, data } = useQuery('listOfRoles', getfetcher)
   	if (isLoading) return 'Loading...'
   	if (error) return 'An error has occurred: ' + error.message
    return (
        <div className="w-100 d-flex flex-column align-items-start">
            {/* <FormModal open={modalIsOpen} modalHandler={modalHandler}>
                <CreateRole/>
            </FormModal> */}
            <Modal
                isOpen={modalIsOpen}
                ariaHideApp={false}
                className={`${classes.content} col-9 col-xl-3 col-md-5 col-sm-7`}
                overlayClassName={`${classes.overlay}`}
            >
                <CreateRole closeModal={modalHandler}/>
            </Modal>
            <BreadCrumb data={breadCrumb}/>
            <div className="w-100">
                <div className="mb-3">
                    <Button text=" اضافه کردن نقش " onclick={modalHandler} sty="primary"/>
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
export default ListOfRoles;