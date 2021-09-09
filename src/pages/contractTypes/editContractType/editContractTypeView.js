import Button from "../../../utils/button";
import FormikControl from '../../../components/formikControl'
import { Form, Formik } from 'formik'

const EditContractTypeView = ({closeModal, onSubmit, validationSchema, initialValues}) => {
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
                        label=' نام آیتم حکم '
                        name='detailName'
                    />
					<div className="col-12 d-flex justify-content-between mt-3">
						<Button type='submit' sty="secondary" text=" ثبت "/>
						<Button onclick={closeModal} sty="danger" text=" انصراف "/>
					</div>
				</Form>
			)}
		</Formik>
    );
}
 
export default EditContractTypeView;