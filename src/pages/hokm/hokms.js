import { useMutation, useQuery } from "react-query"
import useRequest from '../../components/fetchReq'
import React, { useState, useCallback } from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import '@inovua/reactdatagrid-community/index.css'
import '@inovua/reactdatagrid-community/base.css'
import '@inovua/reactdatagrid-community/theme/default-light.css'
import Button from "../../utils/button"
import BreadCrumb from "../breadCrumb/breadCrumb"
import { Input } from "../../utils/input"
import FormModal from "../../utils/formModal"
import classes from './hokms.module.css'
import RegisterContract from "./registerContract"
const gridStyle = { 
    minHeight: 550 ,
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
    const [userName,setUserName] = useState("")
    const [searched, setSearched] = useState([])
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const modalHandler = () => {
        setModalIsOpen(!modalIsOpen)
    }
    const [clickedUser, setClickedUser] = useState()
    const mutation = useMutation(useRequest({
        url:`api/Contract/FindContractByUser?username=${userName}`,
        method:"POST",
        body:""
    }), {
        onSuccess : (res) => {
            setSearched(res.data)
        }
    })
    const searchHandler = (e) => {
        setUserName(e.target.value)
        mutation.mutate()
    }
    // const registerBtnHandler = (data) => {
    //     setModalIsOpen(!modalIsOpen)
    //     setClickedUser(data)
    // }
	const columns =  [
        { name: 'userName', header: ' نام کاریری ', defaultFlex:1 },
		{ name: 'detailName', header: ' نام جزییات ', defaultFlex:1 },
		{ name: 'subimssionDate', header: ' تاریخ ثبت ', defaultFlex:1 },
		{ name: 'effectiveDate', header: ' تاریخ اثر گذاری ', defaultFlex:1 },
        { name: 'executeDate', header: ' تاریخ اجرا  ', defaultFlex:1 },
        { header: "#", defaultFlex:1, render: ({ data }) => <div><Button sty="secondary" text=" انتصاب حکم "/></div>}
    ];
    return ( 
        <div>
            {/* <FormModal open={modalIsOpen} modalHandler={modalHandler}>
                <RegisterContract clickedUser={clickedUser} formProps={data.data}/>
            </FormModal> */}
            <BreadCrumb data={breadCrumb}/>
            <div className={classes.search_section_container}>
                <div className={classes.input_container}>
                    <Input required="true" id="username" name="username" type="text" BlurHandler={searchHandler} label="نام کاربری : "/>
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
export default Hokms;