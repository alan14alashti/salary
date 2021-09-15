import React, { useState } from 'react'
import Modal from 'react-modal'
import classes from './listOfUsers.module.css'
import Button from "../../utils/button"
import DataGrid from '../../utils/dataGrid'
import SideNav from '../sideNav/sideNav'
import AddUser from '../addUser/addUser'
import EditUser from '../addUser/editUser'
import DelUser from '../addUser/delUser'
import { DeleteIcon, EditIcon } from '../../utils/iconButton'
import { Formik, Form, Field } from 'formik'
import FormikControl from '../../components/formikControl'


const gridStyle = { 
    minHeight: 550 ,
}

const ListOfUsersView = ({ onSubmit, initialValues, searchHandler, result, isLoading}) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [delModalIsOpen, setDelModalIsOpen] = useState(false)
    const [delUserId, setDelUserId] = useState(null)
    const [editUserId, setEditUserId] = useState(null)
    const [modalDetHandler, setModalDetHandler] = useState(null)

    const modalHandler = () => {
        setModalIsOpen(!modalIsOpen)
    }
    const delModalHandler = () => {
        setDelModalIsOpen(!delModalIsOpen)
    }
    const delUser = (id) => {
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

    const columns =  [
        { name: 'isActive', maxWidth:90, header: ' فعال ', defaultFlex:1, render:({data}) => <input readOnly type="checkbox" checked={data.isActive}/>},
        { name: 'personalCode', header: ' کد پرسنلی ', defaultFlex:1},
        { name: 'name', header: ' نام ', defaultFlex:1},
        { name: 'family', header: ' نام خانوادگی ', defaultFlex:2},
        { header: '#', maxWidth: 60, defaultFlex:1 ,render:({data}) => <EditIcon onclick={() => editUser(data)}/>},
        { header: '#', maxWidth: 60, defaultFlex:1 ,render:({data}) => <DeleteIcon onclick={() => delUser(data.id)}/>}
    ];
    
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
                <div className="d-flex justify-content-stretch bg-white pt-3">
                    <div className="col-12">
                    <div className="d-flex align-items-center bg-white justify-content-between px-1 py-3">
                            <Formik
                                initialValues={initialValues}
                                onSubmit={onSubmit}
                            >
                                { (formik) => (
				                <Form className="col-xxl-3 col-lg-4 col-sm-6 col-md-5 col-8">
                                    <Field id='searchedTemp' name='searchedTemp'>
                                        {({ field, form, meta }) => (
                                            <div className={classes.search_section}>
                                                <input className={classes.search_input} type="search" {...field} placeholder="کد پرسنلی/نام خانوادگی"/>
                                                <i onClick={ () => searchHandler(field.value) } className="fas fa-search"></i>
                                            </div>
                                        )}
                                    </Field>
                                </Form>
                                )}
                            </Formik>
                            <div className="">
                                <Button onclick={addUser} sty="primary" text="جدید"/>
                            </div>
                        </div>
                        <div>
                            <DataGrid loading={isLoading} data={result} columns={columns} gridStyle={gridStyle}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ListOfUsersView;