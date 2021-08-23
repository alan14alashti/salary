import Date from "../../datePicker/datePicker"
import { Input, Select } from "../../../utils/input"
const EmployeeInfo = ({BlurHandler}) => {
    return (
        <div className="container">
        <div className="px-5 row row-cols-md-2 row-cols-1 gx-5 gy-3">
            <div className="col">
                <Date label=" تاریخ استخدام "/>
            </div>
            <div className="col">
                <Date label=" تاریخ تسویه "/>
            </div>
            <div className="col">
                <Date label=" تاریخ ساعت زنی "/>
            </div>
            <div className="col">
                <Input
                    required="flase"
                    label="کد ساعت زنی"
                    BlurHandler={BlurHandler}
                    id="clockTime"
                    name="clockTime"
                    type="number"
                />
            </div>
            <div className="col">
                <Select
					options={[{value: 1, title:" مدیر "}, {value: 0, title:" منشی "}]}
					defaultOpt="انتخاب کنید"
					required="false"
					label=" انتخاب سمت "
					changeHandler={BlurHandler}
					id="orgChart"
					name="orgChart"
				/>
            </div>
            <div className="col">
                <Select
					options={[{value: 1, title:" نیروهوایی "}, {value: 0, title:" 05 کرمان "}]}
					defaultOpt="انتخاب کنید"
					required="false"
					label=" محل خدمت "
					changeHandler={BlurHandler}
					id="location"
					name="location"
				/>
            </div>
        </div>
        </div>
    );
}
export default EmployeeInfo;