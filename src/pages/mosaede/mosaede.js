import { useQuery, useMutation } from "react-query"
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
import classes from './mosaede.module.css'
import { Input } from "../../utils/input"
import FormModal from "../../utils/formModal"
import Modal from 'react-modal'
import AddMosaede from "./addMosaede"
const gridStyle = { 
    minHeight: 250 ,
}
const getUsers = async () => {
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
const getfetcher = async (id) => {
	const token = localStorage.getItem("accessToken")
    const res =await
		axios(`${BaseUrl}/api/Loan/UserLoans?userId=${id.id}`, {
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
const Mosaede = () => {
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
            text: " مساعده " ,
            link: "/admin/MainPage",
            active: 1
        }
    ]
	const columns =  [
        { name: 'userName', header: ' نام کاربری ', defaultFlex:1},
		{ name: 'amount', header: ' مقدار ', defaultFlex:1},
		{ name: 'installmentCount', header: ' تعداد قسط ', defaultFlex:1},
		{ name: 'subimssionDate', header: ' تاریخ ', defaultFlex:1},
        { name: 'beginInstallmentDate', header: ' تاریخ شروع قسط', defaultFlex:1},
        { header: ' حذف ', defaultFlex:1 ,render:({data}) => <Button text=" حذف " sty="danger"/>},
        { header: ' ویرایش ', defaultFlex:1 ,render:({data}) => <Button onclick={() => setModalIsOpen(true)} text=" ویرایش " sty="secondary"/>}
    ];
    // const [modalIsOpen, setModalIsOpen] = useState(false)
    // const modalHandler = () => {
    //     setModalIsOpen(!modalIsOpen)
    // }
    const { isLoading, error, data } = useQuery('listOfUsers', getUsers)
    const [searched, setSearched] = useState([]) 
    const [userId ,setUserId] = useState()
    const [message, setMessage] = useState("")
    const mutation = useMutation(getfetcher, {
        onSuccess : (res) => {
            setSearched(res.data)    
        }
    })
    const searchHandler = (e) => {
        data.data.map(item => {
            if(item.userName === e.target.value) {
                setUserId(item.id)
            }
        })
        mutation.mutate({id : userId})
    }
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const closeModal =() => {
        setModalIsOpen(false)
    }
   	// if (isLoading) return 'Loading...'
   	// if (error) return 'An error has occurred: ' + error.message
    return ( 
        <div>
            <Modal
                isOpen={modalIsOpen}
                ariaHideApp={false}
                className={`${classes.content} col-11 col-xl-7 col-md-9 col-sm-10`}
                overlayClassName={`${classes.overlay}`}
            >
                <AddMosaede closeModal={closeModal}/>
            </Modal>
            <BreadCrumb data={breadCrumb}/>
            <div className={classes.search_section_container}>
                <div className={classes.input_container}>
                    <Input required="true" id="username" name="username" type="text" BlurHandler={searchHandler} label="نام کاربری : "/>
                </div>
                <div className="my-3">
                    <Button sty="primary" text="ساخت کارمند" onclick={() => setModalIsOpen(true)}/>
                </div>
            </div>
            <ReactDataGrid
                theme="default-light"
                idProperty="id"
                rtl={true}
                style={gridStyle}
                columns={columns}
                dataSource={searched}
            />
        </div>
    );
}
export default Mosaede;