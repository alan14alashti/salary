import classes from './addUser.module.css'
import TabsContainer from './tabsContainer'
import Button from '../../utils/button'
import CommonDiv from './commonDiv'
import LoginInfo from './loginInfo/loginInfo'
import EmployeeInfo from './employeeInfo/employeeInfo'
import Tamas from './tamas/tamas'
import PrivateInfo from './privateInfo/privateInfo'
import Bime from './bime/bime'
import Hesabdary from './hesabdary/hesabdary'
import EducationInfo from './educationInfo/educationInfo'
import PhysicInfo from './physicInfo/physicInfo'
import HokmsAddUser from './hokmsAddUser/hokmsAddUser'
import Madarek from './madarek/madarek'

const AddEditForm = ({closeModal, commonInfoHandler, formState, moreInfoHandler, clickedTab, formHandler, tabClickHandler}) =>{
    // console.log(formState)
    return (
        <form onSubmit={formHandler} className={classes.add_user_container}>
            <CommonDiv formState={formState} commonInfoHandler={commonInfoHandler} moreInfoHandler={moreInfoHandler}/>
            <TabsContainer clickedTab={clickedTab} tabClickHandler={tabClickHandler}/>
            <div className={`${classes.content_container}`}>
                {
                    clickedTab === 0 ? <EmployeeInfo formState={formState} commonInfoHandler={commonInfoHandler} moreInfoHandler={moreInfoHandler}/>:
                    clickedTab === 8 ? <HokmsAddUser userName="admin" commonInfoHandler={commonInfoHandler} moreInfoHandler={moreInfoHandler}/>:
                    clickedTab === 9 ? <LoginInfo formState={formState} commonInfoHandler={commonInfoHandler} moreInfoHandler={moreInfoHandler}/>: 
                    clickedTab === 2 ? <Tamas commonInfoHandler={commonInfoHandler} moreInfoHandler={moreInfoHandler}/>:
                    clickedTab === 3 ? <EducationInfo commonInfoHandler={commonInfoHandler} moreInfoHandler={moreInfoHandler}/>:
                    clickedTab === 4 ? <PhysicInfo commonInfoHandler={commonInfoHandler} moreInfoHandler={moreInfoHandler}/>:
                    clickedTab === 1 ? <PrivateInfo commonInfoHandler={commonInfoHandler} moreInfoHandler={moreInfoHandler}/>:
                    clickedTab === 5 ? <Bime commonInfoHandler={commonInfoHandler} moreInfoHandler={moreInfoHandler}/>:
                    clickedTab ===  6 ? <Hesabdary commonInfoHandler={commonInfoHandler} moreInfoHandler={moreInfoHandler}/>:
                    clickedTab === 7 ? <Madarek commonInfoHandler={commonInfoHandler} moreInfoHandler={moreInfoHandler}/>:
                    null
                }
            </div>
            <div className="col-12 d-flex justify-content-between align-items-start my-3">
                <Button type="submit" sty="secondary" text=" ثبت "/>
                <Button onclick={closeModal} sty="danger" text=" انصراف "/>
            </div>
        </form>
    );
}

export default AddEditForm;