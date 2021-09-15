import React, { useState } from 'react'
import DataGrid from '../../../utils/dataGrid'
import Button from "../../../utils/button"
import { Formik, Form, Field } from 'formik'
import Modal from 'react-modal'
import SideNav from '../../sideNav/sideNav'
import classes from './loan.module.css'
import { changeJalalyToMilady } from '../../../hooks/dateHooks'
import FormikControl from '../../../components/formikControl'

const gridStyle = { 
    minHeight: 550 ,
}

const LoanView = ({ initialValues, onSubmit, result, isLoading, employees }) => {
    console.log(result)
    const columns =  [
        { name: 'loanName', header: ' نام وام ', defaultFlex:1 },
        { name: 'amount', header: ' مبلغ ', defaultFlex:1},
		{ name: 'installmentCount', header: ' تعداد قسط ', defaultFlex:1 },
        { name: 'profitPercent', header: ' درصد بهره ', defaultFlex:1 },
        // { name: 'id', header: "#", defaultFlex:1}
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
            {/* <Modal
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
            </Modal> */}
            {true ? <SideNav active="وام"/> : null}
            <div className="container-fluid">
                <div className="d-flex justify-content-stretch bg-white pt-3">
                    <div className="col-12">
                        <div className="d-flex align-items-center bg-white justify-content-between px-1 py-3">
                            <Formik
                                initialValues={initialValues}
                                onSubmit={onSubmit}
                            >
                                { (formik) => (
				                <Form className="d-flex align-items-center justify-content-between">
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
                                                <i onClick={formik.submitForm} className="fas fa-search"></i>
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
                                    <FormikControl
                                        label=" تسویه شده "
                                        control='checkboxx'
                                        name='checkOut'
                                    />
                                    <FormikControl
                                        label=" حذف شده "
                                        control='checkboxx'
                                        name='delete'
                                    />
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
export default LoanView;