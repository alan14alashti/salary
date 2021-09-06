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
import { useEmployeeGetAllCombo } from '../../hooks'

const AddEditForm = ({closeModal, clickedTab, tabClickHandler}) =>{
    const { isLoading, error, data } = useEmployeeGetAllCombo()
    if (isLoading) return 'Loading...'
   	if (error) return 'An error has occurred: ' + error.message

    const genderOptions = [{ key: 'انتخاب کنید', value: ''}]
    const isMarriedOptions = [{ key: 'انتخاب کنید', value: ''}]
    const militaryServiceOptions = [{ key: 'انتخاب کنید', value: ''}]
    const nationalityOptions = [{ key: 'انتخاب کنید', value: ''}]
    const insuranceOptions = [{ key: 'انتخاب کنید', value: ''}]
    const accountBankOptions = [{ key: 'انتخاب کنید', value: ''}] 
    
    data.data.map( item => {
            switch (item.master) {
                case 'Gender':
                    genderOptions.push({ title : item.detailName, value : item.detailValue })
                    break
                case 'IsMarried':
                    isMarriedOptions.push({ title : item.detailName, value : item.detailValue })
                    break
                case 'MilitaryService':
                    militaryServiceOptions.push({ title : item.detailName, value : item.detailValue })
                    break
                case 'Nationality':
                    nationalityOptions.push({ title : item.detailName, value : item.detailValue })
                    break
                case 'Insurance':
                    insuranceOptions.push({ title : item.detailName, value : item.detailValue })
                    break
                case 'AccountBank':
                    accountBankOptions.push({ title : item.detailName, value : item.detailValue })
                    break
                default:
                    break;
            }
        }
        )
    return (
        <div className={classes.add_user_container}>
            <CommonDiv/>
            <TabsContainer clickedTab={clickedTab} tabClickHandler={tabClickHandler}/>
            <div className={`${classes.content_container}`}>
                {
                    clickedTab === 0 ? <EmployeeInfo/>: //done
                    clickedTab === 8 ? <HokmsAddUser userName="admin"/>:
                    clickedTab === 9 ? <LoginInfo />: //done
                    clickedTab === 2 ? <Tamas />:
                    clickedTab === 3 ? <EducationInfo />:
                    clickedTab === 4 ? <PhysicInfo />:
                    clickedTab === 1 ? <PrivateInfo genderOptions={genderOptions} isMarriedOptions={isMarriedOptions} militaryServiceOptions={militaryServiceOptions} nationalityOptions={nationalityOptions} />:
                    clickedTab === 5 ? <Bime insuranceOptions={insuranceOptions} />:
                    clickedTab ===  6 ? <Hesabdary accountBankOptions={accountBankOptions} />:
                    clickedTab === 7 ? <Madarek />:
                    null
                }
            </div>
            <div className="col-12 d-flex justify-content-between align-items-start my-3">
                <Button type="submit" sty="secondary" text=" ثبت "/>
                <Button onclick={closeModal} sty="danger" text=" انصراف "/>
            </div>
        </div>
    );
}

export default AddEditForm;