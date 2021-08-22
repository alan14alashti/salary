import { useQuery } from "react-query"
import Modal from 'react-modal'
import React, { useState, useCallback } from 'react'
import DataGrid from "../../utils/dataGrid"
import Button from "../../utils/button"
import classes from './bimeTypes.module.css'
import BreadCrumb from "../breadCrumb/breadCrumb"
import AddBimeTypes from "./addBime"
const gridStyle = { 
    minHeight: 250 ,
}

const ListOfBimeTypes = () => {
	const [registerIsOpen, setRegisterIsOpen] = useState(false);
	const modalHandler = () => {
        setRegisterIsOpen(!registerIsOpen)
    }
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
            text: " اطلاعات پایه " ,
            link: "/admin/MainPage/baseInfo",
            active: 0
        },
        {
            text: " انواع بیمه " ,
            link: "/admin/MainPage/baseInfo/loanTypes",
            active: 1
        }
    ]
	const columns =  [
        { name: 'name', header: ' نام ', defaultFlex:1},
		{ name: 'kargahName', header: ' نام کارگاه ', defaultFlex:1},
		{ name: 'karfarma', header: ' کارفرما ', defaultFlex:1},
		{ name: 'kargahCode', header: ' کد کارگاه ', defaultFlex:1},
		{ header: ' حذف ', defaultFlex:1, render: ({ data }) => <Button sty="danger" text="حذف"/>},
        { header: ' ویرایش ', defaultFlex:1, render: ({ data }) => <Button sty="secondary" text="ویرایش"/>},
    ];
    const bimeTypes = [
        {name:"تامین اجتماعی",kargahName:"شرکت فلان",karfarma:"اقای فلانی",kargahCode:"765421"},
        {name:"تامین اجتماعی",kargahName:"شرکت فلان",karfarma:"اقای فلانی",kargahCode:"765421"},
        {name:"تامین اجتماعی",kargahName:"شرکت فلان",karfarma:"اقای فلانی",kargahCode:"765421"}
    ]
    // const { isLoading, error, data } = useQuery('listOfLoanTypes', getfetcher
	// )
   	// if (isLoading) return 'Loading...'
   	// if (error) return 'An error has occurred: ' + error.message
	// const loanTypes = data.data
    return (
        <div className="w-100 d-flex flex-column align-items-start">
			<BreadCrumb data={breadCrumb}/>
			<Modal
				isOpen={registerIsOpen}
				className={`${classes.content} col-xl-3 col-lg-4 col-md-6 col-sm-8 col-10`}
           		overlayClassName={`${classes.overlay}`}
			>
				<AddBimeTypes closeModal={modalHandler}/>
			</Modal>
			<div className="w-100">
				<div className="mb-3">
					<Button text="اضافه کردن بیمه" onclick={modalHandler} sty="primary"/>
				</div>
				<DataGrid data={bimeTypes} columns={columns} gridStyle={gridStyle}/>
			</div>
        </div>
    );
}
export default ListOfBimeTypes;