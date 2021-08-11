import { Input ,Select } from '../../../utils/input'
import Date from '../../datePicker/datePicker'
const PrivateInfo = () => {
    const BlurHandler = (event) => {
        console.log(event.target.value)
    }
    const roles = [{value: 1, title:" نر "}, {value: 0, title:" ماده "}]
    return (
        <div className="container">
        <div className="px-1 px-md-5 row row-cols-1 row-cols-xl-3 row-cols-md-2 gx-5 gy-3">
            <div className="col">
                <Date label=" تاریخ تولد "/>
            </div>
            <div className="col">
                <Input
                required="false"
                label="نام پدر"
                BlurHandler={BlurHandler}
                id="dadName"
                name="dadName"
                type="text"
                />
            </div>
            <div className="col">
                <Input
                    required="false"
                    label="محل تولد"
                    BlurHandler={BlurHandler}
                    id="birthLoc"
                    name="birthLoc"
                    type="text"
                />
            </div>
            <div className="col">
                <Input
                    required="false"
                    label="شماره شناسنامه"
                    BlurHandler={BlurHandler}
                    id="shenasNameNum"
                    name="shenasNameNum"
                    type="number"
                />
            </div>
            <div className="col">
                <Select
                    options={roles}
                    defaultOpt="جنسیت"
                    required="false"
                    label=" نقش "
                    changeHandler={BlurHandler}
                    id="sex"
                    name="sex"
                />
            </div>
            <div className="col">
                <Input
                    required="false"
                    label="محل صدور"
                    BlurHandler={BlurHandler}
                    id="sodor"
                    name="sodor"
                    type="text"
                />
            </div>
            <div className="col">
                <Select
                    options={roles}
                    defaultOpt="انتخاب کنید"
                    required="false"
                    label=" تاهل "
                    changeHandler={BlurHandler}
                    id="married"
                    name="married"
                />
            </div>
            <div className="col">
                <Select
                    options={roles}
                    defaultOpt="انتخاب کنید"
                    required="false"
                    label=" ملیت "
                    changeHandler={BlurHandler}
                    id="national"
                    name="national"
                />
            </div>
            <div className="col">
                <Select
                    options={roles}
                    defaultOpt="انتخاب کنید"
                    required="false"
                    label=" سربازی "
                    changeHandler={BlurHandler}
                    id="khedmat"
                    name="khedmat"
                />
            </div>
            <div className="col">
                <Input
                    required="false"
                    label="عایله"
                    BlurHandler={BlurHandler}
                    id="family"
                    name="family"
                    type="number"
                />
            </div>
        </div>
        </div>
    );
}
 
export default PrivateInfo;