import SearchSection from '../../utils/searchSection'
import React, { useState, useCallback } from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import '@inovua/reactdatagrid-community/index.css'
import Modal from 'react-modal'
import FormModal from "../../utils/formModal"
import Register from "../registerPage/register"
import '@inovua/reactdatagrid-community/base.css'
import '@inovua/reactdatagrid-community/theme/default-light.css'
import Button from "../../utils/button"
import BreadCrumb from "../breadCrumb/breadCrumb"
import { useListOfUsers } from "../../hooks"
import DataGrid from '../../utils/dataGrid'
import SideNav from '../sideNav/sideNav'
const gridStyle = { 
    minHeight: 550 ,
}
const ListOfUsers = () => {
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
    const [registerIsOpen, setRegisterIsOpen] = useState(false);
    const columns =  [
        { name: 'userName', header: ' نام کاربری ', defaultFlex:1},
        { name: 'role', header: ' نقش ', defaultFlex:1},
        { name: 'email', header: ' ایمیل ', defaultFlex:1},
        { name: 'phone', header: ' شماره تلفن ', defaultFlex:1},
        { header: ' حذف ', defaultFlex:1 ,render:({data}) => <Button text=" حذف " sty="danger"/>},
        { header: ' ویرایش ', defaultFlex:1 ,render:({data}) => <Button text=" ویرایش " sty="secondary"/>}
    ];
    const searchHandler = () => {
        // mutation.mutate(userId, {onSuccess: (res) => {
        //     setSearched(res.data)
        // }})
    }
    const changeHandler = (e) => {
        // data.data.map(item => {
        //     if(item.userName === e.target.value) {
        //         setUserId(item.id)
        //     }
        // })
    }
    const modalHandler = () => {
        setRegisterIsOpen(!registerIsOpen)
    }
    const { isLoading, error, data } = useListOfUsers()
   	if (isLoading) return 'Loading...'
   	if (error) return 'An error has occurred: ' + error.message
    return (
        <div className="d-flex h-100">
        {true ? <SideNav active="کارمندان"/> : null}
        <div className="container-fluid">
            <FormModal open={registerIsOpen} modalHandler={modalHandler}>
                <Register/>
            </FormModal>
            {/* <div className="row">
                <BreadCrumb data={breadCrumb}/>
            </div> */}
            <div className="d-flex justify-content-stretch bg-white py-3">
                <div className="col-12">
                    <div className="d-flex align-items-center justify-content-between ps-3 py-3">
                        <div className="col-8 col-sm-9 col-md-10">
                            <SearchSection changeHandler={changeHandler} searchHandler={searchHandler} name="userName"/>
                        </div>
                        <div className="col-4 col-sm-3 col-md-2">
                            <Button sty="primary" text="جدید" onclick={modalHandler}/>
                        </div>
                    </div>
                    <div>
                        <DataGrid data={data.data} columns={columns} gridStyle={gridStyle}/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
export default ListOfUsers;