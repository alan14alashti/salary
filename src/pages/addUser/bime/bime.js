import { Input } from "../../../utils/input";
const Bime = ({BlurHandler}) => {
    return (
        <div className="container">
        <div className="col-xl-3 col-lg-5 col-md-7 col-sm-9 col-11 row row-cols-1">
            <Input
                required=" flase "
                label="کد کارگاه"
                BlurHandler={BlurHandler}
                id="kargahCode"
                name="kargahCode"
                type="text"
            />
            <Input
                required="flase"
                label=" شماره بیمه "
                BlurHandler={BlurHandler}
                id="bimeNum"
                name="bimeNum"
                type="text"
            />
            <Input
                required="flase"
                label=" کد شغل "
                BlurHandler={BlurHandler}
                id="jobCode"
                name="jobCode"
                type="text"
            />
        </div>
        </div>
    );
}
export default Bime;