import { Link } from 'react-router-dom';
import classes from './dashboard.module.css'
const Dashboard = () => {
    const dashboardItems = [
        {title:"کارمندان", icon:"mb-2 fs-1 fas fa-users", to:"/MainPage/karmandan"},
        {title:"حکم ها ", icon:"mb-2 fs-1 fas fa-file-contract", to:"/MainPage/hokms"},
        {title:"ایتم های حقوق", icon:"mb-2 fs-1 fas fa-file-invoice-dollar", to:"/MainPage/salaryItems"},
        {title:"محاسبه", icon:"mb-2 fs-1 fas fa-calculator", to:"/MainPage/Mohasebe"},
        {title:"مساعده", icon:"mb-2 fs-1 fas fa-money-check", to:"/MainPage/mosaede"},
        {title:"وام", icon:"mb-2 fs-1 fas fa-money-check", to:"/MainPage/loans"},
        {title:"اطلاعات پایه", icon:"mb-2 fs-1 fas fa-info-circle", to:"/MainPage/baseInfo"},
        {title:"کارمند ان", icon:"mb-2 fs-1 fas fa-users", to:"/MainPage/karmandan"},
        
    ]
    return (
        <div className={`${classes.dashboard_container} col-12 row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-5 row-cols-xl-4 gy-4 gx-4`}>
            {dashboardItems.map(item => (
                <div className="col">
                    <Link to={item.to} type="button" className={`${classes.fill} text-decoration-none`}>
                        <i className={item.icon}></i>
                        {item.title}
                    </Link>
                </div>
            ))
            }
        </div>
    );
}
export default Dashboard;