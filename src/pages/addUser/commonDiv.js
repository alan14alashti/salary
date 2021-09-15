import classes from './addUser.module.css'
import FormikControl from '../../components/formikControl'

const CommonDiv = () => {
    return (
        <div className="col-12 mb-5 d-flex">
            <div className={`${classes.common_div_add_user} col-xxl-3 xol-xl-5 col-lg-5 col-md-6 col-sm-8 col-10 row row-cols-1`}>

                <FormikControl
                    control='input'
                    type='number'
                    label=' کد پرسنلی '
                    name='personalCode'
                />

                <FormikControl
                    control='input'
                    type='text'
                    label=' نام '
                    name='name'
                />

                <FormikControl
                    control='input'
                    type='text'
                    label=' نام خانوادگی '
                    name='family'
                />

                <FormikControl
                    control='input'
                    type='text'
                    label=' کد ملی '
                    name='extraDetails.nationalCode'
                />
            </div>
            <div className="d-flex align-items-start justify-content-center mt-5 me-5">
                <div className="">
                    <FormikControl
                        label="فعال"
                        control='checkboxx'
                        name='isActive'
                    />
                </div>
            </div>
        </div>
    );
}

export default CommonDiv;