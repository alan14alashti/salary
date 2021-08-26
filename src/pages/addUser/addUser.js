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

const AddUser = ({closeModal}) => {
    const queryClient = useQueryClient()
    const [clickedTab, setClickedTab] = useState(0)
    const tabClickHandler = (index) => {
        setClickedTab(index)
    }
    const [formState, setFormState] = useState({
        id: 0,
        isActive: false,
        personalCode: null,
        name: "",
        family: "",
        hireDate: "2021-05-25T11:04:37.521Z",
        leaveDate: "2021-05-25T11:04:37.521Z",
        attendanceStart: "2021-05-25T11:04:37.521Z",
        attendanceCode: null,
        extraDetails: [
        ],
        userName: "",
        password: "",
        isLogin: false,
        lastLogin: "2021-05-25T11:04:37.521Z",
        roleId: null,
        positionId: null,
        locationId: null
    })
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
    
    const mutation = useMutation(useRequest({
		url:"api/Employee/EmployeeAdd",
		method:"POST",
		body: formState
	}),
	{
        onSuccess: (res) => {
			Swal.fire({
				title: 'Success',
				text: res.data.message,
				icon: 'success',
				confirmButtonColor: '#0050F0',
				timer: 3000
			})
            // console.log(res)
            // const charts = queryClient.getQueryData("OrgChart")
            // console.log(charts)
            // QueryClient.refetchQueries("OrgChart")
            // queryClient.refetchQueries(["OrgChart"])
            queryClient.refetchQueries({ stale: true })
        },
		onError: (error) => {
			Swal.fire({
				title: 'Error!',
				text: error.response.data.message,
				icon: 'error',
				confirmButtonColor: '#0050f0',
				confirmButtonText: 'امتحان دوباره',
				timer: 3000
			})
		}
    })
	const formHandler = (event) => {
		event.preventDefault();
        console.log(formState)
        mutation.mutate()
  	}
    return (
        <form onSubmit={formHandler} className={classes.add_user_container}>
            <CommonDiv commonInfoHandler={commonInfoHandler} moreInfoHandler={moreInfoHandler}/>
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
    )
}

export default AddUser;