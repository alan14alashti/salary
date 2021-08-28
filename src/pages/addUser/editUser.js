import { useEffect, useState } from 'react'
import AddEditForm from './addEditForm'
import Swal from "sweetalert2"
import { useQueryClient } from "react-query"
import { useEditEmployee, useEmployeeSearch } from '../../hooks'
import { useQuery, useMutation } from "react-query"
import useRequest from "../../components/fetchReq"
const EditUser = ({closeModal, id}) => {
    
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
    const { isLoading, error, data } = useQuery(['employeeSearchById',id],useRequest({
        url:`api/Employee/EmployeeSearch?id=${id}`,
        method:"GET",
        body:""
    }),{onSuccess : (res) => {
        setFormState({
            id: res.data.id,
            isActive: res.data.isActive,
            personalCode: res.data.personalCode,
            name: res.data.name,
            family: res.data.family,
            hireDate: res.data.hireDate,
            leaveDate: res.data.leaveDate,
            attendanceStart: res.data.attendanceStart,
            attendanceCode: res.data.attendanceCode,
            extraDetails: res.data.extraDetails,
            userName: res.data.userName,
            password: res.data.password,
            isLogin: res.data.isLogin,
            lastLogin: res.data.lastLogin,
            roleId: res.data.roleId,
            positionId: res.data.positionId,
            locationId: res.data.locationId
        })
    }})
    const queryClient = useQueryClient()
    const [clickedTab, setClickedTab] = useState(0)
    const tabClickHandler = (index) => {
        setClickedTab(index)
    }
    const mutation = useEditEmployee(formState)
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
    
	const formHandler = (event) => {
		event.preventDefault();
        console.log(formState)
        mutation.mutate(formState, {
            onSuccess: (res) => {
                console.log(res)
                Swal.fire({
                    title: 'Success',
                    text: " کارمند با موفقیت ویرایش شد ", 
                    icon: 'success',
                    confirmButtonColor: '#215A88',
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
                console.log(error.response)
                Swal.fire({
                    title: 'Error!',
                    text: ' مشکلی وجود دارد ',
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

export default EditUser;