import Modal from 'react-modal'
import { useState } from 'react'
import FormModal from '../../utils/formModal'
import { Input } from '../../utils/input'
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

const AddUser = () => {
    const BlurHandler = (event) => {
        console.log(event.target.value)
    } 
    const [modalIsOpen, setModalIsOpen] = useState(true)
    const closeModal =() => {
        setModalIsOpen(false)
    }
    const [clickedTab, setClickedTab] = useState(0)
    const tabClickHandler = (index) => {
        setClickedTab(index)
    }
    console.log(clickedTab)
    return (
        <Modal
			isOpen={modalIsOpen}
			ariaHideApp={false}
			className={`${classes.content} col-10`}
           	overlayClassName={`${classes.overlay}`}
		>
        <div className={classes.add_user_container}>
            <CommonDiv/>
            <TabsContainer clickedTab={clickedTab} tabClickHandler={tabClickHandler}/>
            <div className={`${classes.content_container}`}>
                {
                    clickedTab === 0 ? <EmployeeInfo/>:
                    clickedTab === 8 ? <HokmsAddUser userName="admin"/>:
                    clickedTab === 9 ? <LoginInfo/>: 
                    clickedTab === 2 ? <Tamas/>:
                    clickedTab === 3 ? <EducationInfo/>:
                    clickedTab === 4 ? <PhysicInfo/>:
                    clickedTab === 1 ? <PrivateInfo/>:
                    clickedTab === 5 ? <Bime/>:
                    clickedTab ===  6 ? <Hesabdary/>:
                    clickedTab === 7 ? <Madarek/>:
                    null
                }
            </div>
            <div className="col-12 d-flex justify-content-between align-items-start my-3">
                <Button onclick={() => console.log("ثبت")} sty="secondary" text=" ثبت "/>
                <Button onclick={closeModal} sty="danger" text=" انصراف "/>
            </div>
        </div>
        </Modal>
    )
}
export default AddUser;