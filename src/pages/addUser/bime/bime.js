import FormikControl from "../../../components/formikControl";
const Bime = ({ insuranceOptions }) => {
    return (
        <div className="container">
        <div className="col-xl-3 col-lg-5 col-md-7 col-sm-9 col-11 row row-cols-1">
            <FormikControl
                options={insuranceOptions}
                control='select'
                label=' بیمه '
                name='extraDetails.workshopCode'
            />
            <FormikControl
                control='input'
                type='text'
                label=' شماره بیمه '
                name='extraDetails.insuranceNo'
            />
            <FormikControl
                control='input'
                type='text'
                label=' کد شغل '
                name='extraDetails.jobNo'
            />
        </div>
        </div>
    );
}
export default Bime;