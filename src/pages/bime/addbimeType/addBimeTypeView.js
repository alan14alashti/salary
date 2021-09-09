import Button from "../../../utils/button";
import FormikControl from '../../../components/formikControl'
import { Form, Formik } from 'formik'

const AddBimeTypeView = ({closeModal, onSubmit, validationSchema, initialValues}) => {
    return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
        >
			{ formik => (
				
				<Form className='h-100 d-flex flex-column align-items-center justify-content-evenly'>
					
					<FormikControl
						control='input'
						type='text'
						label=' نام بیمه '
						name='insuranceName'
					/>
					<FormikControl
						control='input'
						type='text'
						label=' نام کارگاه '
						name='workshopName'
					/>
					<FormikControl
						control='input'
						type='text'
						label=' کد کارگاه '
						name='workshopCode'
					/>
					<FormikControl
						control='input'
						type='text'
						label=' کارفرما '
						name='employer'
					/>
					<FormikControl
						control='input'
						type='number'
						label=' درصد سهم کارفرما '
						name='employerSharedPercent'
					/>
					<FormikControl
						control='input'
						type='number'
						label=' درصد سهم کارمند '
						name='employeeSharedPercent'
					/>
					<div className="col-12 d-flex justify-content-between mt-3">
						<Button disabled={formik.isSubmitting} type='submit' sty="secondary" text=" ثبت "/>
						<Button onclick={closeModal} sty="danger" text=" انصراف "/>
					</div>
				</Form>
			)}
		</Formik>
    );
}
 
export default AddBimeTypeView;