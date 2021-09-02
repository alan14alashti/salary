import { useQuery, useMutation } from "react-query"
import axios from "axios"
import { BaseUrl } from "../../utils/baseUrl"
import React, { useState, useCallback } from 'react'
import Button from "../../utils/button"
import Modal from 'react-modal'
import DataGrid from "../../utils/dataGrid"
import classes from './maliat.module.css'
import DelMaliat from "./delMaliat"
import EditMaliat from "./editMaliat"
import AddMaliat from "./addMaliat"
import { DeleteIcon, EditIcon } from "../../utils/iconButton"
const gridStyle = { 
    minHeight: 250 ,
}


const Maliat = () => {

    const columns =  [
        { name: 'name', header: ' نام ', defaultFlex:1},
        { header: ' # ', maxWidth: 60, defaultFlex:1 ,render:({data}) => <EditIcon onclick={editModalHandler}/>},
        { header: ' # ', maxWidth: 60, defaultFlex:1 ,render:({data}) => <DeleteIcon onclick={delModalHandler}/>}
    ]
    const maliatJadval = [
        {name: "جدول مالیاتی سال 99"},
        {name: "جدول مالیاتی سال 98" }
    ]
    const [delId,setDelId] = useState(null)
	const [editId,setEditId] = useState(null)
	const [modalDetHandler, setModalDetHandler] = useState(null)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const modalHandler = () => {
        setModalIsOpen(!modalIsOpen)
    }
    const addModalHandler = () => {
        setModalIsOpen(true)
        setModalDetHandler(1)
    }
    const delModalHandler = (data) => {
		setDelId(data.id)
        setModalIsOpen(true)
        setModalDetHandler(0)
    }
    const editModalHandler = (data) => {
		setEditId(data.id)
        setModalIsOpen(true)
        setModalDetHandler(2)
    }
    
    return (
        <div className="w-100 d-flex flex-column align-items-start">
			<Modal
				isOpen={modalIsOpen}
				className={`${classes.content} col-md-6 col-sm-8 col-10`}
           		overlayClassName={`${classes.overlay}`}
			>
				{
                	modalDetHandler === 1 ? <AddMaliat closeModal={modalHandler}/>:
                	modalDetHandler === 0 ? <DelMaliat id={delId} closeModal={modalHandler}/>:
                	modalDetHandler === 2 ? <EditMaliat id={editId} closeModal={modalHandler}/>:
                	null
            	}
			</Modal>
            <div className="w-100 bg-white">
                <div className="m-1">
                    <Button onclick={addModalHandler} text="اضافه کردن جدول مالیاتی" sty="primary"/>
                </div>
                <DataGrid data={maliatJadval} columns={columns} gridStyle={gridStyle}/>
            </div>
        </div>
    );
}
export default Maliat;