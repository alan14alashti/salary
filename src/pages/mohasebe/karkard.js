import SearchSection from '../../utils/searchSection'
import React, { useState, useCallback } from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import '@inovua/reactdatagrid-community/index.css'
import Modal from 'react-modal'
import FormModal from "../../utils/formModal"
import '@inovua/reactdatagrid-community/base.css'
import '@inovua/reactdatagrid-community/theme/default-light.css'
import Button from "../../utils/button"
import BreadCrumb from "../breadCrumb/breadCrumb"
import { useListOfUsers } from "../../hooks"
import { useWizard } from 'react-use-wizard';
const gridStyle = { 
    minHeight: 550 ,
}
const Karkard = () => {
    const { handleStep, previousStep, nextStep } = useWizard();
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
        <div className="">
        <div className="d-flex align-items-center bg-white justify-content-between ps-3 py-3">
            <div className="col-8 col-sm-9 col-md-10">
                <SearchSection changeHandler={changeHandler} searchHandler={searchHandler} name="userName"/>
            </div>
            <div className="col-4 col-sm-3 col-md-2">
                <Button sty="primary" text="انتخاب فایل" onclick={modalHandler}/>
            </div>
        </div>
        {/* <FormModal open={registerIsOpen} modalHandler={modalHandler}>
            <Register/>
        </FormModal> */}
        <div>
            <ReactDataGrid
                theme="default-light"
                idProperty="id"
                rtl={true}
                style={gridStyle}
                columns={columns}
                dataSource={data.data}
            />
        </div>
        <div className="my-3 d-flex justify-content-between">
            <Button onclick={() => previousStep()} sty="danger" text=" انتخاب کارمند "/>
            <Button onclick={() => nextStep()} sty="secondary" text=" محاسبه "/>
        </div>
        </div>
    );
}
export default Karkard;
