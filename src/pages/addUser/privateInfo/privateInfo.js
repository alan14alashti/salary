import FormikControl from '../../../components/formikControl';

const PrivateInfo = ({ genderOptions, isMarriedOptions, militaryServiceOptions, nationalityOptions,}) => {
    
    return (
        <div className="container">
        <div className="px-1 px-md-5 row row-cols-1 row-cols-xl-3 row-cols-md-2 gx-5 gy-3">
            <div className="col">
                <FormikControl
                    control='date'
                    label=' تاریخ تولد '
                    name="extraDetails.birthDate"
                />
            </div>
            <div className="col">
                <FormikControl
                    type="text"
                    control='input'
                    label=' نام پدر '
                    name='extraDetails.fatherName'
                />
            </div>
            <div className="col">
                <FormikControl
                    type="text"
                    control='input'
                    label=' محل تولد '
                    name='extraDetails.birthPlace'
                />
            </div>
            <div className="col">
                <FormikControl
                    type="text"
                    control='input'
                    label=' شماره شناسنامه '
                    name='extraDetails.identityCardNo'
                />
            </div>
            <div className="col">
                <FormikControl
                    options={genderOptions}
                    control='select'
                    label=' جنسیت '
                    name='extraDetails.gender'
                />
            </div>
            <div className="col">
                <FormikControl
                    type="number"
                    control='input'
                    label=' محل صدور '
                    name='extraDetails.identityCardIssued'
                />
            </div>
            <div className="col">
                <FormikControl
                    options={isMarriedOptions}
                    control='select'
                    label=' تاهل '
                    name='extraDetails.isMarried'
                />
            </div>
            <div className="col">
                <FormikControl
                    options={nationalityOptions}
                    control='select'
                    label=' ملیت '
                    name='extraDetails.nationality'
                />
            </div>
            <div className="col">
                <FormikControl
                    options={militaryServiceOptions}
                    control='select'
                    label=' سربازی '
                    name='extraDetails.militaryService'
                />
            </div>
            <div className="col">
                <FormikControl
                    type="number"
                    control='input'
                    label=' عایله '
                    name='extraDetails.familySize'
                />
            </div>
        </div>
        </div>
    );
}
 
export default PrivateInfo;