import React from 'react'
import { Formik, Form } from 'formik'
import FormikControl  from '../../../components/formikControl'
import Button from '../../../utils/button'


const SeeContractView = ({ closeModal, initialValues, hireTypeOptions, contractTypeOptions }) => {
    
    return (
        <Formik
			initialValues={initialValues}
        >
			{ formik => (
				<Form className='row row-cols-md-2 row-cols-1 g-4'>
                    <div className="col">
                        <FormikControl
                            disabled
                            options={contractTypeOptions}
                            control='select'
                            label=' نوع حکم '
                            name='contractTypeId'
                        />
                    </div>
                    <div className="col">
                        <FormikControl
                            disabled
                            readOnly
                            options={hireTypeOptions}
                            control='select'
                            label=' نوع استخدام '
                            name='hireTypeID'
                        />
                    </div>
                    <div className="col">
                        <FormikControl
                            control='input'
                            type='text'
                            label=' تاریخ اجرا '
                            name="executeDate"
                        />
                    </div>
                    <div className="col">
                        <FormikControl
                            readOnly
                            control='input'
                            type='text'
                            label=' تاریخ موثر '
                            name="effectiveDate"
                        />
                    </div>
                    {initialValues.contractDetails.map( (item, index) => (
                        <div className="col" key={index}>
                            <FormikControl
                                readOnly
                                control='input'
                                type="number"
                                label={item.itemTitle}
                                name={`contractDetails[${index}].itemValue`}
                            />
                        </div>
                    ))
                    }
                    <div className="col-12 d-flex justify-content-between mt-3">
						<Button type="button" onclick={closeModal} sty="danger" text=" انصراف "/>
					</div>
                </Form>
            )}
        </Formik>
    );
}
 
export default SeeContractView;