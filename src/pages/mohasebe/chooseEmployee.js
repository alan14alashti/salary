import Button from '../../utils/button'
import classes from './mohasebe.module.css'
import { useWizard } from 'react-use-wizard';
const ChooseEmployee = (props) => {
    const { handleStep, previousStep, nextStep } = useWizard();

    return (
        <div className="col-xl-8 col-lg-9 col-md-10 col-sm-11 d-flex flex-column mx-auto">
            <div className="my-4 row d-flex justify-content-between">
                <div className={classes.choose_employee_div}>

                </div>
                <div className={classes.choose_employee_div}>

                </div>
            </div>
            <div className="my-3 d-flex justify-content-between">
                <Button onclick={() => previousStep()} sty="danger" text=" انتخاب محدوده زمان "/>
                <Button onclick={() => nextStep()} sty="secondary" text=" کارکرد "/>
            </div>
        </div>
    );
}
export default ChooseEmployee;