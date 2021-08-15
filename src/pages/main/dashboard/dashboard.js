import { Link } from 'react-router-dom';
import classes from './dashboard.module.css'
const Dashboard = () => {
    return (
        <div className={`${classes.dashboard_container} row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-2`}>
            <div className="">
                <Link to="/admin/MainPage/karmandan" type="button" className={`${classes.fill} text-decoration-none text-center`}> کارمندان </Link>
            </div>
            <div className="">
                <Link to="/admin/MainPage/hokms" type="button" className={`${classes.fill} text-decoration-none text-center`}> حکم ها </Link>
            </div>
            <div className="">
                <Link to="/admin/MainPage/salaryItems" type="button" className={`${classes.fill} text-decoration-none text-center`}> آیتم های حقوق </Link>
            </div>
            <div className="">
                <button type="button" className={classes.fill}> ورود اطلاعات </button>
            </div>
            <div className="">
                <button type="button" className={classes.fill}> محاسبه </button>
            </div>
            <div className="">
                <Link to="/admin/MainPage/mosaede" type="button" className={`${classes.fill} text-decoration-none text-center`}> مساعده </Link>
            </div>
            <div className="">
                <Link to="/admin/MainPage/loans" type="button" className={`${classes.fill} text-decoration-none text-center`}> وام </Link>
            </div>
            <div className="">
                <button type="button" className={classes.fill}> گزارش ها </button>
            </div>
            <div className="">
                <button type="button" className={classes.fill}> خروجی ها </button>
            </div>
            <div className="">
                <button type="button" className={classes.fill}> کاربران </button>
            </div>
            <div className="">
                <Link to="/admin/MainPage/baseInfo" type="button" className={`${classes.fill} text-decoration-none text-center`}> اطلاعات پایه </Link>
            </div>
            <div className="">
                <button type="button" className={classes.fill}> درخواست ها </button>
            </div>
            <div className="">
                <button type="button" className={classes.fill}> مرخصی </button>
            </div>
            <div className="">
                <button type="button" className={classes.fill}> ماموریت ها </button>
            </div>
        </div>
    );
}
export default Dashboard;