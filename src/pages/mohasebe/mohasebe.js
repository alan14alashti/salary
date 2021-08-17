import StepWizard from "react-step-wizard";
import ChooseEmployee from "./chooseEmployee";
import ChoosePeriod from "./choosePeriod";
import Karkard from "./karkard";
import classes from './mohasebe.module.css'
import { Wizard, useWizard } from 'react-use-wizard';
const Mohasebe = () => {
    //to disable  transition uncomment
    let custom = {
        enterRight: '',
        enterLeft : '',
        exitRight : '',
        exitLeft  : ''
    }
    
    return (
        <div className={`${classes.mohasebe_container} container`}>
            {/* <StepWizard transitions={custom}>
                <ChoosePeriod/>
                <ChooseEmployee/>
                <Karkard/>
            </StepWizard> */}
            <Wizard>
                <ChoosePeriod/>
                <ChooseEmployee/>
                <Karkard/>
            </Wizard>

        </div>
    );
}
 
export default Mohasebe;