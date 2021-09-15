import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import FormikControl  from '../../../components/formikControl'
import Button from '../../../utils/button'
import Modal from 'react-modal'
import classes from '../contracts.module.css'
import SubmitForEmployees from './submitForEmployees/submitForEmployees'

const AddContractView = ({selected, onChange, closeModal, initialValues, onSubmit, validationSchema, hireTypeOptions, contractTypeOptions }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const modalHandler = () => {
        setModalIsOpen(!modalIsOpen)
    }
    return (
        <>
        <Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
        >
			{ formik => (
				<Form className='row row-cols-md-2 row-cols-1 g-4'>
                    <div className="col">
                        <FormikControl
                            options={contractTypeOptions}
                            control='select'
                            label=' نوع حکم '
                            name='contractTypeId'
                        />
                    </div>
                    <div className="col">
                        <FormikControl
                            options={hireTypeOptions}
                            control='select'
                            label=' نوع استخدام '
                            name='hireTypeID'
                        />
                    </div>
                    <div className="col">
                        <FormikControl
                            calendarPopperPosition="auto"
                            control='date'
                            label=' تاریخ اجرا '
                            name="executeDate"
                        />
                    </div>
                    <div className="col">
                        <FormikControl
                            calendarPopperPosition="auto"
                            control='date'
                            label=' تاریخ موثر '
                            name="effectiveDate"
                        />
                    </div>
                    {initialValues.contractDetails.map( (item, index) => (
                        <div className="col" key={index}>
                            <FormikControl
                                control='input'
                                type="number"
                                label={item.itemTitle}
                                name={`contractDetails[${index}].itemValue`}
                            />
                        </div>
                    ))
                    }
                    <div className="col-12 d-flex justify-content-between mt-3">
						<div className="d-flex align-items-center justify-content-evenly">
                            <Button type='submit' sty="secondary" text=" ثبت "/>
                            <div className="me-2">
                                <Button type="button" onclick={modalHandler} sty="primary" text=" ثبت گروهی "/>
                            </div>
                        </div>
						<Button type="button" onclick={closeModal} sty="danger" text=" انصراف "/>
					</div>
                </Form>
            )}
        </Formik>
        <Modal
            isOpen={modalIsOpen}
            ariaHideApp={false}
            className={`${classes.content} col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-sm-9 col-10`}
            overlayClassName={`${classes.overlay}`}
        >
            <SubmitForEmployees selected={selected} onChange={onChange} closeModal={modalHandler}/>
        </Modal>
        </>
    );
}
 
export default AddContractView;