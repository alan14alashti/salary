import classes from './addUser.module.css'
import { Input } from '../../utils/input'
const CommonDiv = ({BlurHandler}) => {
    return (
        <div className="col-12 mb-5">
            <div className={`${classes.common_div_add_user} col-3 row row-cols-1`}>
                <Input
                    required="true"
                    label="شماره پرسنلی"
                    BlurHandler={BlurHandler}
                    id="personalNum"
                    name="personalNum"
                    type="number"
                />
                <Input
                    required="true"
                    label=" نام "
                    BlurHandler={BlurHandler}
                    id="name"
                    name="firstName"
                    type="text"
                />
                <Input
                    required="true"
                    label=" نام خانوادگی "
                    BlurHandler={BlurHandler}
                    id="lastName"
                    name="lastName"
                    type="text"
                />
                <Input
                    required="true"
                    label=" کد ملی "
                    BlurHandler={BlurHandler}
                    id="codeMeli"
                    name="codeMeli"
                    type="text"
                />
            </div>
        </div>
    );
}
 
export default CommonDiv;