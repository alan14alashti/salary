import React, { useState, useCallback } from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import '@inovua/reactdatagrid-community/index.css'
import '@inovua/reactdatagrid-community/base.css'
import '@inovua/reactdatagrid-community/theme/default-light.css'
import Button from "../../utils/button"
import BreadCrumb from "../breadCrumb/breadCrumb"
import classes from './mosaede.module.css'
import FormModal from "../../utils/formModal"
import Modal from 'react-modal'
import AddMosaede from "./addMosaede"
import { useListOfUsers, useFindLoanByUser } from '../../hooks'
import SearchSection from '../../utils/searchSection'
const gridStyle = { 
    minHeight: 250 ,
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
    const { isLoading, error, data } = useListOfUsers()
    const [searched, setSearched] = useState([]);   
    const [userId ,setUserId] = useState()
    const mutation = useFindLoanByUser(userId)
    const searchHandler = () => {
        mutation.mutate(userId, {onSuccess: (res) => {
            setSearched(res.data)
        }})
    }
    const changeHandler = (e) => {
        data.data.map(item => {
            if(item.userName === e.target.value) {
                setUserId(item.id)
            }
        })
    }
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const modalHandler =() => {
        setModalIsOpen(!modalIsOpen)
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
                <AddMosaede closeModal={modalHandler}/>
            </Modal>
            <BreadCrumb data={breadCrumb}/>
            <div className="d-flex align-items-center bg-white justify-content-between ps-3 py-3">
                <div className="col-8 col-sm-9 col-md-10">
                    <SearchSection changeHandler={changeHandler} searchHandler={searchHandler} name="userName"/>
                </div>
                <div className="col-4 col-sm-3 col-md-2">
                    <Button sty="primary" text="جدید" onclick={modalHandler}/>
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