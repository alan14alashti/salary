import { useState } from 'react'
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
import Swal from "sweetalert2"
import { useQueryClient, useMutation } from "react-query"
import useRequest from '../../components/fetchReq'
import { useEmployeeSearch } from '../../hooks'

const EditUser = ({closeModal, id}) => {
    const queryClient = useQueryClient()
    const { isLoading, error, data } = useEmployeeSearch(id)
    console.log(data)
    const [clickedTab, setClickedTab] = useState(0)
    const tabClickHandler = (index) => {
        setClickedTab(index)
    }
    const [formState, setFormState] = useState({
        id: data.data.id,
        isActive: data.data.isActive,
        personalCode: data.data.personalCode,
        name: data.data.name,
        family: data.data.family,
        hireDate: data.data.hireDate,
        leaveDate: data.data.leaveDate,
        attendanceStart: data.data.attendanceStart,
        attendanceCode: data.data.attendanceCode,
        extraDetails: data.data.extraDetails,
        userName: data.data.userName,
        password: data.data.password,
        isLogin: data.data.isLogin,
        lastLogin: data.data.lastLogin,
        roleId: data.data.roleId,
        positionId: data.data.positionId,
        locationId: data.data.locationId
    })
    console.log(formState)
    const commonInfoHandler = (name, value, isValidate) => {
        switch (name) {
            case 'password':
                setFormState({
                    ...formState,
                    [name]: value 
                })
                break;
            case 'roleId':
                setFormState({
                    ...formState,
                    [name]: Number(value) 
                })
                break;
            case 'personalCode':
                    setFormState({
                        ...formState,
                        [name]: Number(value) 
                    })
                    break;
            case 'attendanceCode':
                setFormState({
                    ...formState,
                    [name]: Number(value) 
                })
                break;
            case 'positionId':
                setFormState({
                    ...formState,
                    [name]: Number(value) 
                })
                break;
            case 'locationId':
                setFormState({
                    ...formState,
                    [name]: Number(value) 
                })
                break;
            default:
                setFormState({
                    ...formState,
                    [name]: value 
                })
                break;
        }
    } 
    const moreInfoHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setFormState({
            ...formState,
            extraDetails: [
                ...formState.extraDetails,
                {
                    itemName: name, 
                    itemValue:value,
                    id: 0,
                    userId: 0,
                    detailType: 0,
                    groupName: 0,
                    employeeId: 0
                },
            ]
        })
    }
    // const mutation = useMutation(useRequest({
	// 	url:"api/Employee/EmployeeAdd",
	// 	method:"POST",
	// 	body: formState
	// }),
	// {
    //     onSuccess: (res) => {
	// 		Swal.fire({
	// 			title: 'Success',
	// 			text: res.data.message,
	// 			icon: 'success',
	// 			confirmButtonColor: '#0050F0',
	// 			timer: 3000
	// 		})
    //         // console.log(res)
    //         // const charts = queryClient.getQueryData("OrgChart")
    //         // console.log(charts)
    //         // QueryClient.refetchQueries("OrgChart")
    //         // queryClient.refetchQueries(["OrgChart"])
    //         queryClient.refetchQueries({ stale: true })
    //     },
	// 	onError: (error) => {
	// 		Swal.fire({
	// 			title: 'Error!',
	// 			text: error.response.data.message,
	// 			icon: 'error',
	// 			confirmButtonColor: '#0050f0',
	// 			confirmButtonText: 'امتحان دوباره',
	// 			timer: 3000
	// 		})
	// 	}
    // })
	const formHandler = (event) => {
		event.preventDefault();
        console.log(formState)
        // mutation.mutate()
  	}
    if (isLoading) return 'Loading...'
   	if (error) return 'An error has occurred: ' + error.message
    return (
        <form onSubmit={formHandler} className={classes.add_user_container}>
            <CommonDiv commonInfoHandler={commonInfoHandler} moreInfoHandler={moreInfoHandler}/>
            <TabsContainer clickedTab={clickedTab} tabClickHandler={tabClickHandler}/>
            <div className={`${classes.content_container}`}>
                {
                    clickedTab === 0 ? <EmployeeInfo formState={formState} commonInfoHandler={commonInfoHandler} moreInfoHandler={moreInfoHandler}/>:
                    clickedTab === 8 ? <HokmsAddUser formState={formState} userName="admin" commonInfoHandler={commonInfoHandler} moreInfoHandler={moreInfoHandler}/>:
                    clickedTab === 9 ? <LoginInfo formState={formState} commonInfoHandler={commonInfoHandler} moreInfoHandler={moreInfoHandler}/>: 
                    clickedTab === 2 ? <Tamas formState={formState} commonInfoHandler={commonInfoHandler} moreInfoHandler={moreInfoHandler}/>:
                    clickedTab === 3 ? <EducationInfo formState={formState} commonInfoHandler={commonInfoHandler} moreInfoHandler={moreInfoHandler}/>:
                    clickedTab === 4 ? <PhysicInfo formState={formState} commonInfoHandler={commonInfoHandler} moreInfoHandler={moreInfoHandler}/>:
                    clickedTab === 1 ? <PrivateInfo formState={formState} commonInfoHandler={commonInfoHandler} moreInfoHandler={moreInfoHandler}/>:
                    clickedTab === 5 ? <Bime formState={formState} commonInfoHandler={commonInfoHandler} moreInfoHandler={moreInfoHandler}/>:
                    clickedTab ===  6 ? <Hesabdary formState={formState} commonInfoHandler={commonInfoHandler} moreInfoHandler={moreInfoHandler}/>:
                    clickedTab === 7 ? <Madarek formState={formState} commonInfoHandler={commonInfoHandler} moreInfoHandler={moreInfoHandler}/>:
                    null
                }
            </div>
            <div className="col-12 d-flex justify-content-between align-items-start my-3">
                <Button type="submit" sty="secondary" text=" ثبت "/>
                <Button onclick={closeModal} sty="danger" text=" انصراف "/>
            </div>
        </form>
    )
}

export default EditUser;