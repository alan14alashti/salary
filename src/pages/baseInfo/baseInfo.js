import classes from './baseInfo.module.css'
import { Link } from 'react-router-dom';
import BreadCrumb from '../breadCrumb/breadCrumb';
const BaseInfo = () => {
    const breadCrumb = [
        {
            text: " ادمین " ,
            link: "/admin",
            active: 0
        },
        {
            text: " داشبورد " ,
            link: "/admin/MainPage",
            active: 0
        },
        {
            text: " اطلاعات پایه " ,
            link: "/admin/MainPage/baseInfo",
            active: 1
        }
    ]
    return (
        <div>
        <BreadCrumb data={breadCrumb}/>
        <div className="container-fluid">
            <div className={`${classes.base_info_container} row row-cols-sm-2 row-cols-1 row-cols-md-3 row-cols-xl-6 row-cols-lg-5 g-2`}>
                <div className="">
                    <Link to="/MainPage/baseInfo/contractItems" type="button" className={`${classes.fill} text-decoration-none text-center`}> آیتم های حکم </Link>
                </div>
                <div className="">
                    <Link to="/MainPage/baseInfo/loanTypes" type="button" className={`${classes.fill} text-decoration-none text-center`}> انواع وام </Link>
                </div>
                <div className="">
                    <Link to="/MainPage/karmandan" type="button" className={`${classes.fill} text-decoration-none text-center`}> انواع مرخصی </Link>
                </div>
                <div className="">
                    <Link to="/MainPage/karmandan" type="button" className={`${classes.fill} text-decoration-none text-center`}> انواع تردد </Link>
                </div>
                <div className="">
                    <Link to="/MainPage/karmandan" type="button" className={`${classes.fill} text-decoration-none text-center`}> انواع ماموریت </Link>
                </div>
                <div className="">
                    <Link to="/MainPage/karmandan" type="button" className={`${classes.fill} text-decoration-none text-center`}> تقویم ها </Link>
                </div>
                <div className="">
                    <Link to="/MainPage/karmandan" type="button" className={`${classes.fill} text-decoration-none text-center`}> دستگاه ساعت زنی </Link>
                </div>
                <div className="">
                    <Link to="/MainPage/karmandan" type="button" className={`${classes.fill} text-decoration-none text-center`}> آیتم های منو </Link>
                </div>
                <div className="">
                    <Link to="/MainPage/baseInfo/ListOfRoles" type="button" className={`${classes.fill} text-decoration-none text-center`}> نقش ها </Link>
                </div>
                <div className="">
                    <Link to="/MainPage/baseInfo/OrganizationChart" type="button" className={`${classes.fill} text-decoration-none text-center`}> چارت سازمانی </Link>
                </div>
                <div className="">
                    <Link to="/MainPage/baseInfo/ListOfBimeTypes" type="button" className={`${classes.fill} text-decoration-none text-center`}> بیمه </Link>
                </div>
                <div className="">
                    <Link to="/MainPage/baseInfo/MahalKhedmat" type="button" className={`${classes.fill} text-decoration-none text-center`}> محل خدمت </Link>
                </div>
                <div className="">
                    <Link to="/MainPage/baseInfo/Maliat" type="button" className={`${classes.fill} text-decoration-none text-center`}> مالیات </Link>
                </div>
            </div>
        </div>
        </div>
    );
}
export default BaseInfo;