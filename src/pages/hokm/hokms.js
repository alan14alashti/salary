import React, { useState, useCallback } from 'react'
import DataGrid from '../../utils/dataGrid'
import Button from "../../utils/button"
import BreadCrumb from "../breadCrumb/breadCrumb"
import SearchSection from '../../utils/searchSection'
import FormModal from "../../utils/formModal"
import RegisterContract from "./registerContract"
import { useFindHokmsByUser } from '../../hooks/index' 
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
    const mutation = useFindHokmsByUser(userName)
    const changeHandler = (e) => {
        setUserName(e.target.value)
    }
    const searchHandler = () => {
        mutation.mutate(userName,{onSuccess: (res) => {
            setSearched(res.data)
        }})
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
            <div className="d-flex align-items-center bg-white justify-content-between ps-3 py-3">
                <div className="col-8 col-sm-9 col-md-10">
                    <SearchSection changeHandler={changeHandler} searchHandler={searchHandler} name="userName"/>
                </div>
                <div className="col-4 col-sm-3 col-md-2">
                    <Button sty="primary" text="جدید" onclick={modalHandler}/>
                </div>
            </div>
            <DataGrid data={searched} columns={columns} gridStyle={gridStyle}/>
        </div>
    );
}
export default Hokms;