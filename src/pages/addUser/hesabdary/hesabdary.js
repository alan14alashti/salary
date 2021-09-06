import FormikControl from '../../../components/formikControl'

const Hesabdary = ({ accountBankOptions }) => {
    return (
        <div className="container-fluid">
        <div className="px-5 row row-cols-xxl-3 row-cols-md-2 row-cols-1 gx-5 gy-3">
            <div className="col">
                <FormikControl
                    control='input'
                    type='text'
                    label=' کد تفضیلی '
                    name='extraDetails.detailedCode'
                />
            </div> 
            <div className="col"> 
                <FormikControl
                    control='input'
                    type='text'
                    label=' کد مرکز هزینه '
                    name='extraDetails.costCenterCode'
                />
            </div>
            <div className="col">
                <FormikControl
                    control='input'
                    type='text'
                    label=' شماره حساب '
                    name='extraDetails.accountNo'
                />
            </div>
            <div className="col">
                <FormikControl
                    control='select'
                    label=' انتخاب بانک '
                    name='extraDetails.accountBank'
                    options={accountBankOptions}
                />
            </div>
            <div className="col">
                <FormikControl
                    control='input'
                    type='text'
                    label=' شماره کارت '
                    name='extraDetails.cardNo'
                />
            </div>
            <div className="col">
                <FormikControl
                    control='input'
                    type='text'
                    label=' بانک کارت '
                    name='extraDetails.cardBank'
                />
            </div>
            <div className="col">
                <FormikControl
                    control='input'
                    type='text'
                    label=' شماره شبا '
                    name='extraDetails.shabaNo'
                />
            </div>
        </div>
        </div>
    );
}
export default Hesabdary;