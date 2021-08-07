import classes from './drawer.module.css'
const DrawerMenue = ({ clickHandler, data }) => {
    return (
        <div className={classes.drawer_container}>
            {data.map((item,index) => (
                <div className={classes.drawer_item} onClick={() => clickHandler(index)}>
                    <div className="d-flex align-items-center py-3">
                        <i className={item.icon}></i>
                        <span>{item.text}</span>
                    </div>
                    {data.length - 1 > index ? <hr className="w-100 text-gray m-0 p-0"/> : null}
                </div>
            )
            )}
        </div>
    );
}
export default DrawerMenue;