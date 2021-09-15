import FormikControl from '../../../../components/formikControl'
import { Formik, Form } from 'formik'
import Button from '../../../../utils/button'

const AddLoanTypeView = ({ onSubmit, initialValues, validationSchema, closeModal }) => {
    return (
        <Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
        >
			{ formik => (
				<Form className='d-flex flex-column align-items-center justify-content-between'>
                    <div className="w-100 mb-1">
                        <FormikControl
                            control='input'
                            type="text"
                            label=' نام '
                            name='title'
                        />
                    </div>
                    <div className="w-100 mb-1">
                        <FormikControl
                            control='input'
                            type="number"
                            label=' مبلغ '
                            name='amount'
                        />
                    </div>
                    <div className="w-100 mb-1">
                        <FormikControl
                            control='input'
                            type="number"
                            label=' تعداد اقساط '
                            name="installmentCount"
                        />
                    </div>
                    <div className="w-100 mb-1">
                        <FormikControl
                            control='input'
                            type="number"
                            label=' درصد بهره '
                            name="profitPercent"
                        />
                    </div>
                    <div className="w-100 mb-1">
                        <FormikControl
                            label=" مقادیر در زمان پرداخت قابل تغییر باشند "
                            control='checkboxx'
                            name='canChange'
                        />
                    </div>
                    <div className="col-12 d-flex justify-content-between mt-3">
                        <Button type='submit' sty="secondary" text=" ثبت "/>
						<Button type="button" onclick={closeModal} sty="danger" text=" انصراف "/>
					</div>
                </Form>
            )}
        </Formik>
    );
}
 
export default AddLoanTypeView;