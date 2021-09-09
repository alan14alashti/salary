import Button from "../../../utils/button";
import { Formik, Form } from "formik";
const DelMaliatView = ({ onSubmit, closeModal }) => {
    return (
        <Formik
                onSubmit={onSubmit}
            >
            { formik => (
                <Form onSubmit={onSubmit}  className={`w-100 d-flex flex-column align-items-center`}>
                    <span> ایا از حذف جدول مالیاتی مورد نظر اطمینان دارید ؟ </span>
                    <div className="col-12 d-flex justify-content-between mt-3">
                        <Button type="submit" sty="secondary" text=" ثبت "/>
                        <Button onclick={closeModal} sty="danger" text=" انصراف "/>
                    </div>
                </Form>
            )}
        </Formik>
    );
}
 
export default DelMaliatView;