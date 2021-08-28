import { useState } from 'react'
import Swal from "sweetalert2"
import { useQueryClient } from "react-query"
import AddEditForm from './addEditForm'
import { useAddEmployee } from '../../hooks'

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
                    // [name]: Number(value) 
                    [name]: 2
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
                    // [name]: Number(value)
                    [name]: 100 
                })
                break;
            case 'locationId':
                setFormState({
                    ...formState,
                    // [name]: Number(value) 
                    [name]: 1000
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
    
    const mutation = useAddEmployee(formState)
	const formHandler = (event) => {
		event.preventDefault();
        console.log(formState)
        mutation.mutate(formState, {
            onSuccess: (res) => {
                console.log(res)
                Swal.fire({
                    title: 'Success',
                    text: " کارمند با موفقیت ثبت شد ",
                    icon: 'success',
                    confirmButtonColor: '#215A88',
                    timer: 3000
                })
                // console.log(res)
                // const charts = queryClient.getQueryData("OrgChart")
                // console.log(charts)
                // QueryClient.refetchQueries("OrgChart")
                // queryClient.refetchQueries(["OrgChart"])
                // queryClient.refetchQueries({ stale: true })
            },
            onError: (error) => {
                console.log(error.response)
                Swal.fire({
                    title: 'Error!',
                    text: 'مشکلی وجود دارد',
                    icon: 'error',
                    confirmButtonColor: '#215A88',
                    confirmButtonText: 'امتحان دوباره',
                    timer: 3000
                })
            }
        })
    }
    return (
        <AddEditForm closeModal={closeModal} commonInfoHandler={commonInfoHandler} formState={formState} moreInfoHandler={moreInfoHandler} clickedTab={clickedTab} formHandler={formHandler} tabClickHandler={tabClickHandler} />
    )
    }
export default AddUser;