import SearchSection from '../../utils/searchSection'
import React, { useState, useCallback } from 'react'
import Modal from 'react-modal'
import classes from './listOfUsers.module.css'
import Button from "../../utils/button"
import BreadCrumb from "../breadCrumb/breadCrumb"
import { useEmployeeGetAllSummery, useListOfUsers, useEmployeeSearchSummery, useSalaryItems } from "../../hooks"
import DataGrid from '../../utils/dataGrid'
import SideNav from '../sideNav/sideNav'
import AddUser from '../addUser/addUser'
import EditUser from '../addUser/editUser'
import DelUser from '../addUser/delUser'
const gridStyle = { 
    minHeight: 550 ,
}
const ListOfUsers = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [delUserId, setDelUserId] = useState(null)
    const [editUserId, setEditUserId] = useState(null)
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
    //         text: " کارمندان " ,
    //         link: "/admin/MainPage",
    //         active: 1
    //     }
    // ]
    const [modalDetHandler, setModalDetHandler] = useState(null)
    const [searched, setSearched] = useState([])
    const [temp ,setTemp] = useState()
    const mutation = useEmployeeSearchSummery(temp)
    const columns =  [
        { name: 'isActive', header: ' فعال ', defaultFlex:1, render:({data}) => <input readOnly type="checkbox" checked={data.isActive}/>},
        { name: 'personalCode', header: ' کد پرسنلی ', defaultFlex:1},
        { name: 'name', header: ' نام ', defaultFlex:1},
        { name: 'family', header: ' نام خانوادگی ', defaultFlex:1},
        { header: ' ویرایش ', maxWidth:88, defaultFlex:1 ,render:({data}) => <i onClick={() => editUser(data)} className={`${classes.edit_icon} fas fa-edit`}></i>},
        { header: ' حذف ', maxWidth: 78, defaultFlex:1 ,render:({data}) => <i onClick={() => delUser(data.id)} className={`${classes.delete_icon} fas fa-trash-alt`}></i>}
    ];
    const searchHandler = (e) => {
        e.preventDefault()
        mutation.mutate(temp, {onSuccess: (res) => {
            setSearched(res.data)
        }})
    }
    const changeHandler = (e) => {
        setTemp(e.target.value)
    }
    const modalHandler = () => {
        setModalIsOpen(!modalIsOpen)
    }
    const delUser = (data) => {
        setDelUserId(data.id)
        setModalDetHandler(0)
        setModalIsOpen(true)
    }
    const editUser = (data) => {
        setEditUserId(data.id)
        setModalDetHandler(2)
        setModalIsOpen(true)
    }
    const addUser = () => {
        setModalDetHandler(1)
        setModalIsOpen(true)
    }
    // const { isLoading, error, data } = useEmployeeGetAllSummery()
   	// if (isLoading) return 'Loading...'
   	// if (error) return 'An error has occurred: ' + error.message
    // const [modalIsOpen, setModalIsOpen] = useState(true)
    // const closeModal =() => {
    //     setModalIsOpen(false)
    // }
    return (
        <div className="d-flex h-100">
            {true ? <SideNav active="کارمندان"/> : null}
            <div className="container-fluid">
                <Modal
                    isOpen={modalIsOpen}
                    ariaHideApp={false}
                    className={`${classes.content} col-10`}
                    overlayClassName={`${classes.overlay}`}
                >
                    {
                        modalDetHandler === 1 ? <AddUser closeModal={modalHandler}/> :
                        // modalDetHandler === 0 ? <DelUser id={delUserId}/> :
                        modalDetHandler === 2 ? <EditUser closeModal={modalHandler} id={editUserId}/>:
                        null
                    }
                </Modal>
                <div className="d-flex justify-content-stretch bg-white py-3">
                    <div className="col-12">
                        <div className="d-flex align-items-center justify-content-between ps-3 py-3">
                            <form onSubmit={searchHandler} className="col-8 col-sm-9 col-md-10">
                                <SearchSection changeHandler={changeHandler} searchHandler={searchHandler} name="userName"/>
                            </form> 
                            <div className="col-4 col-sm-3 col-md-2">
                                <Button sty="primary" text="جدید" onclick={addUser}/>
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
export default ListOfUsers;