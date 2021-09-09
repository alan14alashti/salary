import React, { useState, useCallback } from 'react'
import DataGrid from '../../utils/dataGrid'
import Button from "../../utils/button"
import { Formik, Form } from 'formik'
import FormikControl from '../../components/formikControl'
import SideNav from '../sideNav/sideNav'

const gridStyle = { 
    minHeight: 550 ,
}

const ContractsView = ({initialValues, onSubmit, result}) => {
    const columns =  [
        { name: 'userName', header: ' نام کاریری ', defaultFlex:1 },
		{ name: 'detailName', header: ' نام جزییات ', defaultFlex:1 },
		{ name: 'subimssionDate', header: ' تاریخ ثبت ', defaultFlex:1 },
		{ name: 'effectiveDate', header: ' تاریخ اثر گذاری ', defaultFlex:1 },
        { name: 'executeDate', header: ' تاریخ اجرا  ', defaultFlex:1 },
        { header: "#", defaultFlex:1, render: ({ data }) => <div><Button sty="secondary" text=" انتصاب حکم "/></div>}
    ];
    return (
        <div className="d-flex h-100">
            {/* <FormModal open={modalIsOpen} modalHandler={modalHandler}>
                <RegisterContract clickedUser={clickedUser} formProps={data.data}/>
            </FormModal> */}
            {true ? <SideNav active="حکم ها"/> : null}
            <div className="container-fluid">
                <div className="d-flex justify-content-stretch bg-white py-3">
                    <div className="col-12">
                        <div className="d-flex align-items-center bg-white justify-content-between ps-3 py-3">
                            {/* <form onSubmit={searchHandler} className="col-8 col-sm-9 col-md-10">
                                <SearchSection changeHandler={changeHandler} searchHandler={searchHandler} name="userName"/>
                            </form> */}
                            <Formik
                                initialValues={initialValues}
                                // validationSchema={validationSchema}
                                onSubmit={onSubmit}
                            >
                                { formik => (
				                <Form className="col-8 col-sm-9 col-md-10">
                                    <FormikControl
                                        control='input'
                                        type='text'
                                        name='searchedTemp'
                                    />
                                </Form>
                                )}
                            </Formik>
                            <div className="col-4 col-sm-3 col-md-2">
                                <Button sty="primary" text="جدید"/>
                            </div>
                        </div>
                        <div>
                            <DataGrid data={result} columns={columns} gridStyle={gridStyle}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ContractsView;