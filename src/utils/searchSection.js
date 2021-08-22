import { Input } from "./input";
const SearchSection = ({searchHandler, name, changeHandler}) => {
    return (
        <div className="col-xl-4 col-lg-6 col-md-7 col-sm-9 col-11 d-flex align-items-center">
            <span className="mx-2 fs-6 fw-bold"> جستجو </span>
            <Input type="search" placeHolder=" کد پرسنلی/نام خانوادگی " changeHandler={changeHandler} required="true" id={name} name={name}  type="text" BlurHandler={searchHandler} label=""/>
        </div>
    );
}
export default SearchSection;