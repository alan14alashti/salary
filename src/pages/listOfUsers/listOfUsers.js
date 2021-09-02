import SearchSection from '../../utils/searchSection'
import React, { useState, useCallback } from 'react'
import Modal from 'react-modal'
import classes from './listOfUsers.module.css'
import Button from "../../utils/button"
import BreadCrumb from "../breadCrumb/breadCrumb"
import { useEmployeeGetAllSummery, useListOfUsers, useEmployeeSearchSummery, useSalaryItems, useEmployeeSearch } from "../../hooks"
import DataGrid from '../../utils/dataGrid'
import SideNav from '../sideNav/sideNav'
import AddUser from '../addUser/addUser'
import EditUser from '../addUser/editUser'
import DelUser from '../addUser/delUser'
import { DeleteIcon, EditIcon } from '../../utils/iconButton'
const gridStyle = { 
    minHeight: 550 ,
}
const ListOfUsers = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [delModalIsOpen, setDelModalIsOpen] = useState(false)
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
    // const mutation = useEmployeeSearchSummery(temp)
    // const { isLoading, error, data } 
    const search = useEmployeeSearchSummery(temp)
    const columns =  [
        { name: 'isActive', maxWidth:90, header: ' فعال ', defaultFlex:1, render:({data}) => <input readOnly type="checkbox" checked={data.isActive}/>},
        { name: 'personalCode', header: ' کد پرسنلی ', defaultFlex:1},
        { name: 'name', header: ' نام ', defaultFlex:1},
        { name: 'family', header: ' نام خانوادگی ', defaultFlex:2},
        { name:'id', header: '#', maxWidth: 60, defaultFlex:1 ,render:({data}) => <EditIcon onclick={() => editUser(data)}/>},
        { name:'id', header: '#', maxWidth: 60, defaultFlex:1 ,render:({data}) => <DeleteIcon onclick={() => delUser(data.id)}/>}
    ];
    const searchHandler = (e) => {
        e.preventDefault()
        // mutation.mutate(temp, {onSuccess: (res) => {
        //     setSearched(res.data)
        // }})
        
    }
    const changeHandler = (e) => {
        setTemp(e.target.value)
    }
    const modalHandler = () => {
        setModalIsOpen(!modalIsOpen)
    }
    const delModalHandler = () => {
        setDelModalIsOpen(!delModalIsOpen)
    }
    const delUser = (id) => {
        console.log(id)
        setDelUserId(id)
        setDelModalIsOpen(!delModalIsOpen)
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
    return (
        <div className="d-flex h-100">
            <Modal
                isOpen={modalIsOpen}
                ariaHideApp={false}
                className={`${classes.content} col-10`}
                overlayClassName={`${classes.overlay}`}
            >
                {
                    modalDetHandler === 1 ? <AddUser closeModal={modalHandler}/> :
                    modalDetHandler === 2 ? <EditUser closeModal={modalHandler} id={editUserId}/> :
                    null
                }
            </Modal>
            <Modal 
                isOpen={delModalIsOpen}
                ariaHideApp={false}
                className={`${classes.content_del} col-xxl-3 col-xl-4 col-lg-5 col-md-6 col-sm-8 col-10`}
                overlayClassName={`${classes.overlay}`}
            >
                <DelUser closeModal={delModalHandler} id={delUserId}/>
            </Modal>
            {true ? <SideNav active="کارمندان"/> : null}
            <div className="container-fluid">
                <div className="d-flex justify-content-stretch bg-white py-3">
                    <div className="col-12">
                        <div className="d-flex mb-2">
                            <form onSubmit={searchHandler} className="col-8 col-sm-9 col-md-10">
                                <SearchSection changeHandler={changeHandler} searchHandler={searchHandler} name="userName"/>
                            </form> 
                            <div className="col-4 col-sm-3 col-md-2">
                                <Button sty="primary" text="جدید" onclick={addUser}/>
                            </div>
                        </div>
                        <div>
                            <DataGrid data={search.data ? search.data.data : []} columns={columns} gridStyle={gridStyle}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ListOfUsers;