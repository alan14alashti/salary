import React, { useState, useCallback } from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import '@inovua/reactdatagrid-community/index.css'
import '@inovua/reactdatagrid-community/base.css'
import '@inovua/reactdatagrid-community/theme/default-light.css'
import Button from "../../utils/button"
import BreadCrumb from "../breadCrumb/breadCrumb"
import DelContractType from "./delContractType"
import FormModal from "../../utils/formModal"
import EditContractItem from "./editContractType"
import AddContractItem from "./addContratType"
import { useListOfContractTypes } from "../../hooks"

const gridStyle = { 
    minHeight: 450 ,
}
const ContractTypes = () => {
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
            text: " انواع حکم " ,
            link: "/admin/MainPage/baseInfo/loanTypes",
            active: 1
        }
    ]
    const [modalDetHandler, setModalDetHandler] = useState(null)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [delContractId, setDelContractId] = useState(null)
    const [editContractId, setEditContractId] = useState(null)
    const modalHandler = () => {
        setModalIsOpen(!modalIsOpen)
    }
    const delContract = (data) => {
        setDelContractId(data.id)
        setModalDetHandler(0)
        setModalIsOpen(true)
    }
    const editContract = (data) => {
        setEditContractId(data.id)
        setModalDetHandler(2)
        setModalIsOpen(true)
    }
    const addContract = (data) => {
        setModalDetHandler(1)
        setModalIsOpen(true)
    }
	const columns =  [
        { name: 'name', header: ' نام حکم ', defaultFlex: 1},
        { name: 'id', header: ' # ', defaultFlex: 1, render: ({ data }) => <div><Button onclick={() => delContract(data)} sty="danger" text="حذف"/> <Button onclick={() => editContract(data)} sty="secondary" text="ویرایش"/></div>},
    ];
    const { isLoading, error, data } = useListOfContractTypes()
   	if (isLoading) return 'Loading...'
   	if (error) return 'An error has occurred: ' + error.message
    const contracts = data.data
    return ( 
        <div className="w-100 d-flex flex-column align-items-start">
            <FormModal open={modalIsOpen} modalHandler={modalHandler}>
                {
                    modalDetHandler === 1 ? <AddContractItem/> :
                    modalDetHandler === 0 ? <DelContractType id={delContractId}/> :
                    modalDetHandler === 2 ? <EditContractItem id={editContractId}/> :
                    null
                }
            </FormModal>
            <BreadCrumb data={breadCrumb}/>
			<div className="w-100">
                <div className="mb-3">
                    <Button text="اضافه کردن حکم" onclick={addContract} sty="primary"/>
                </div>
                <ReactDataGrid
                    theme="default-light"
                    idProperty="id"
                    rtl={true}
                    style={gridStyle}
                    columns={columns}
                    dataSource={contracts}
                />
			</div>
        </div>
    );
}
export default ContractTypes;