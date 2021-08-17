import Button from '../../utils/button'
import { Input } from '../../utils/input';
import Date from '../datePicker/datePicker';
import { useWizard } from 'react-use-wizard';
import classes from './mohasebe.module.css'
const ChoosePeriod = (props) => {
    const BlurHandler = (event) => {
        console.log(event.target.value)
    } 
    const { handleStep, previousStep, nextStep } = useWizard();
    return (
        <div className="col-10 col-xl-4 col-lg-5 col-md-7 col-sm-9 d-flex flex-column align-items-center mx-auto">
            <div className="my-2 col-12 d-flex justify-content-center">
                <Input
                    required="true"
                    label="عنوان"
                    BlurHandler={BlurHandler}
                    id="title"
                    name="title"
                    type="text"
                />
            </div>
            <div className={`${classes.date_container} my-2 col-12 d-flex justify-content-between`}>
                <Date label=" تاریخ شروع "/>
                <Date label=" تاریخ پایان "/>
            </div>
            <div className="mt-4  mb-3 col-12 d-flex justify-content-center">
                <Button onclick={() => nextStep()} sty="secondary" text=" انتخاب کارمندان "/>
            </div>
        </div>
    );
}
export default ChoosePeriod;