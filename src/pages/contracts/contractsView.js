import React, { useState } from 'react'
import DataGrid from '../../utils/dataGrid'
import Button from "../../utils/button"
import { Formik, Form, Field } from 'formik'
import Modal from 'react-modal'
import SideNav from '../sideNav/sideNav'
import classes from './contracts.module.css'
import AddContract from './addContract/addContract'
import SeeContract from './seeContract/seeContract'
import { changeJalalyToMilady } from '../../hooks/dateHooks'

const gridStyle = { 
    minHeight: 550 ,
}


const ContractsView = ({ initialValues, onSubmit, result, searchHandler, isLoading, employees, searchedChanges }) => {
    const columns =  [
        { name: 'employeeName', header: ' نوع حکم ', defaultFlex:1 },
        { name: 'executeDate', header: ' تاریخ اجرا  ', defaultFlex:1, render: ({data}) => <span>{changeJalalyToMilady(data.executeDate)} {data.executeDate}</span> },
		{ name: 'effectiveDate', header: ' تاریخ اثر گذاری ', defaultFlex:1, render: ({data}) => <span>{changeJalalyToMilady(data.effectiveDate)} {data.effectiveDate}</span> },
        { name: 'id', header: "#", defaultFlex:1, render: ({ data }) => <div><Button onclick={() => seeHandler(data)} sty="secondary" text=" مشاهده "/></div>}
    ];
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalDetHandler, setModalDetHandler] = useState(null)
    const [seeData, setSeeData] = useState()
    const modalHandler = () => {
        setModalIsOpen(!modalIsOpen)
    }
    const addHandler = () => {
        setModalIsOpen(true)
        setModalDetHandler(1)
    }
    const seeHandler = (data) => {
        setSeeData(data)
        setModalIsOpen(true)
        setModalDetHandler(0)
    }
    return ( 
        <div className="d-flex h-100">
            <Modal
                isOpen={modalIsOpen}
                ariaHideApp={false}
                className={`${classes.content} col-xxl-6 col-xl-7 col-lg-8 col-md-9 col-sm-10 col-11`}
                overlayClassName={`${classes.overlay}`}
            >
                { 
                    modalDetHandler === 1 ? <AddContract closeModal={modalHandler}/> :
                    modalDetHandler === 0 ? <SeeContract data={seeData} closeModal={modalHandler}/> :
                    null
                }   
            </Modal>
            {true ? <SideNav active="حکم ها"/> : null}
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
                                    <Field  id='employees' name='searchedTemp'>
                                        {({ field, form, meta }) => (
                                            <div className={classes.search_section}>
                                                <input 
                                                    autocomplete="off" 
                                                    className={classes.search_input} 
                                                    list="employees" 
                                                    type="text" {...field} 
                                                    placeholder="کد پرسنلی/نام خانوادگی"
                                                    // onChange={e => {
                                                    //     // call the built-in handleBur
                                                    //     formik.handleChange(e)
                                                    //     // and do something about e
                                                    //     searchedChanges(e.currentTarget.value)
                                                    // }}
                                                />
                                                <i onClick={ () => searchHandler(field.value) } className="fas fa-search"></i>
                                            </div>
                                        )}
                                    </Field>
                                    <datalist id="employees">
                                        {employees.map((employee) => {
                                            return (
                                            <option
                                                value={`${employee.family}`}
                                                key={`${employee.id}`}
                                            />
                                            );
                                        })}
                                    </datalist>
                                </Form>
                                )}
                            </Formik>
                            <div className="">
                                <Button onclick={addHandler} sty="primary" text="جدید"/>
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
export default ContractsView;