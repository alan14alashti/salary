import React, { useState, useCallback } from 'react'
import DataGrid from '../../utils/dataGrid'
import Button from "../../utils/button"
import BreadCrumb from "../breadCrumb/breadCrumb"
import classes from './mosaede.module.css'
import FormModal from "../../utils/formModal"
import Modal from 'react-modal'
import AddMosaede from "./addMosaede"
import { useListOfUsers, useFindLoanByUser } from '../../hooks'
import SearchSection from '../../utils/searchSection'
import SideNav from '../sideNav/sideNav'
const gridStyle = { 
    minHeight: 250 ,
}
const Mosaede = () => {
    // const breadCrumb = [
    //     {
    //         text: " ادمین " ,
    //         link: "/admin",
    //         active: 0
    //     },
    //     {
    //         text: " داشبورد " ,
    //         link: "/admin/MainPage",
    //         active: 0
    //     },
    //     {
    //         text: " مساعده " ,
    //         link: "/admin/MainPage",
    //         active: 1
    //     }
    // ]
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
    const searchHandler = (e) => {
        e.preventDefault()
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
        <div className="d-flex h-100">
            {true ? <SideNav active="مساعده"/> : null}
            <div className="container-fluid">
                <Modal
                    isOpen={modalIsOpen}
                    ariaHideApp={false}
                    className={`${classes.content} col-11 col-xl-7 col-md-9 col-sm-10`}
                    overlayClassName={`${classes.overlay}`}
                >
                    <AddMosaede closeModal={modalHandler}/>
                </Modal>
                {/* <BreadCrumb data={breadCrumb}/> */}
                <div className="d-flex justify-content-stretch bg-white py-3">
                    <div className="col-12">
                        <div className="d-flex align-items-center bg-white justify-content-between ps-3 py-3">
                            <form onSubmit={searchHandler} className="col-8 col-sm-9 col-md-10">
                                <SearchSection searchHandler={searchHandler} changeHandler={changeHandler} name="userName"/>
                            </form>
                            <div className="col-4 col-sm-3 col-md-2">
                                <Button sty="primary" text="جدید" onclick={modalHandler}/>
                            </div>
                        </div>
                        <div>
                            <DataGrid data={searched} columns={columns} gridStyle={gridStyle}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Mosaede;