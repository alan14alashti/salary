import React, { useState, useCallback } from 'react'
import Button from "../../utils/button"
import BreadCrumb from "../breadCrumb/breadCrumb"
import FormModal from "../../utils/formModal"
import SearchSection from "../../utils/searchSection"
import { useFindLoanByUser, useListOfUsers } from "../../hooks"
import DataGrid from '../../utils/dataGrid'
const gridStyle = { 
    minHeight: 250 ,
}
const Loan = () => {
    const [submitedLoan, setSubmitedLoan] = useState()
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
            text: " وام ها " ,
            link: "/admin/MainPage",
            active: 1
        }
    ]
	const columns =  [
        { name: 'title', header: ' عنوان وام ', defaultFlex:1},
		{ name: 'amount', header: ' مقدار ', defaultFlex:1},
		{ name: 'installmentCount', header: ' تعداد قسط ', defaultFlex:1},
		{ name: 'subimssionDate', header: ' تاریخ ', defaultFlex:1},
        { name: 'userName', header: ' نام کاربری ', defaultFlex:1},
        { name: 'beginInstallmentDate', header: ' تاریخ شروع قسط', defaultFlex:1},
        { name: 'id', header: ' # ', defaultFlex:1 ,render:({data}) => <Button onclick={() => setSubmitedLoan(data)} text=" مشاهده " sty="primary"/>},
    ];
    // const [modalIsOpen, setModalIsOpen] = useState(false)
    // const modalHandler = () => {
    //     setModalIsOpen(!modalIsOpen)
    // }
    const { isLoading, error, data } = useListOfUsers()
    const [searched, setSearched] = useState([])  
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
   	// if (isLoading) return 'Loading...'
   	// if (error) return 'An error has occurred: ' + error.message
    return ( 
        <div>
            {/* <FormModal open={modalIsOpen} modalHandler={modalHandler}>
               
            </FormModal> */}
            <BreadCrumb data={breadCrumb}/>
            <div className="d-flex align-items-center bg-white justify-content-between ps-3 py-3">
                <form onSubmit={searchHandler} className="col-8 col-sm-9 col-md-10">
                    <SearchSection searchHandler={searchHandler} changeHandler={changeHandler} name="userName"/>
                </form>
                <div className="col-4 col-sm-3 col-md-2">
                    <Button sty="primary" text="جدید"/>
                </div>
            </div>
            <DataGrid data={searched} columns={columns} gridStyle={gridStyle}/>
        </div>
    );
}
export default Loan;