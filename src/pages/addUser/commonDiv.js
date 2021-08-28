import classes from './addUser.module.css'
import { Input } from '../../utils/input'
const CommonDiv = ({moreInfoHandler, commonInfoHandler, formState}) => {
    // console.log(formState,"common div")
    return (
        <div className="col-12 mb-5 d-flex">
            <div className={`${classes.common_div_add_user} col-xxl-3 xol-xl-5 col-lg-5 col-md-6 col-sm-8 col-10 row row-cols-1`}>
                <Input
                    value={formState.personalCode}
                    required="true"
                    label="شماره پرسنلی"
                    changeHandler={(e) => commonInfoHandler(e.target.name, e.target.value)}
                    id="personalCode"
                    name="personalCode"
                    type="number"
                />
                <Input
                    value={formState.name}
                    required="true"
                    label=" نام "
                    changeHandler={(e) => commonInfoHandler(e.target.name, e.target.value)}
                    id="name"
                    name="name"
                    type="text"
                />
                <Input
                    value={formState.family}
                    required="true"
                    label=" نام خانوادگی "
                    changeHandler={(e) => commonInfoHandler(e.target.name, e.target.value)}
                    id="family"
                    name="family"
                    type="text"
                />
                <Input
                    required="true"
                    label=" کد ملی "
                    BlurHandler={moreInfoHandler}
                    id="codeMeli"
                    name="codeMeli"
                    type="text"
                />
            </div>
            <div className="d-flex justify-content-center mt-5 me-5">
                <label className="mx-2" for="isActive"> فعال </label>
                <input checked={formState.isActive} onChange={(e) => commonInfoHandler(e.target.name, e.target.checked)} type="checkbox" id="isActive" name="isActive" />
            </div>
        </div>
    );
}
 
export default CommonDiv;