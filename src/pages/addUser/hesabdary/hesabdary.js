import { Input, Select } from "../../../utils/input";
const Hesabdary = () => {
    const BlurHandler = (event) => {
        console.log(event.target.value)
    }
    return (
        <div className="container">
        <div className="px-5 row row-cols-xl-3 row-cols-md-2 row-cols-1 gx-5 gy-3 ">
            <div className="col">
                <Input
                    required=" flase "
                    label=" کد تفصیلی "
                    BlurHandler={BlurHandler}
                    id="kargahCode"
                    name="kargahCode"
                    type="text"
                />
            </div> 
            <div className="col"> 
                <Input
                    required="flase"
                    label=" کد مرکز هزینه "
                    BlurHandler={BlurHandler}
                    id="bimeNum"
                    name="bimeNum"
                    type="text"
                />
            </div>
            <div className="col">
                <Input
                    required="flase"
                    label=" شماره حساب "
                    BlurHandler={BlurHandler}
                    id="jobCode"
                    name="jobCode"
                    type="text"
                />
            </div>
            <div className="col">
                <Select
                    options={[{value: 1, title:" انصار "}, {value: 0, title:" سپه "}]}
                    defaultOpt="انتخاب کنید"
                    required="false"
                    label=" انتخاب بانک "
                    changeHandler={BlurHandler}
                    id="bank"
                    name="bank"
                />
            </div>
            <div className="col">
                <Input
                    required="flase"
                    label=" شماره کارت "
                    BlurHandler={BlurHandler}
                    id="jobCode"
                    name="jobCode"
                    type="text"
                />
            </div>
            <div className="col">
                <Input
                    required="flase"
                    label=" بانک کارت "
                    BlurHandler={BlurHandler}
                    id="jobCode"
                    name="jobCode"
                    type="text"
                />
            </div>
            <div className="col">
                <Input
                    required="flase"
                    label=" شماره شبا "
                    BlurHandler={BlurHandler}
                    id="jobCode"
                    name="jobCode"
                    type="text"
                />
            </div>
        </div>
        </div>
    );
}
export default Hesabdary;