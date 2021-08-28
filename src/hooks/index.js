import { useQuery, useMutation } from "react-query"
import useRequest from "../components/fetchReq"

const useListOfContractTypes = () => {
  return useQuery('listOfContractTypes', useRequest({
    url:"api/Contract/ListOfContractDetails",
    method:"POST",
    body:""
    })
    )
}

const useFindHokmsByUser = (userName) => {
    return useMutation(useRequest({
        url:`api/Contract/FindContractByUser?username=${userName}`,
        method:"POST",
        body:""
    })
    )
}


const useFindLoanByUser = (userId) => {
    return useMutation(useRequest({
        url:`api/Loan/UserLoans?userId=${userId}`,
        method:"POST",
        body: ''
    }))
}

const useListOfUsers = () => {
    return useQuery('listOfUsers', useRequest({
        url:"api/Authenticate/listOfUsers",
        method:"POST",
        body:""
    }))
}
const useEmployeeGetAllSummery = () => {
    return useQuery('employeeGetAllSummery', useRequest({
        url:"api/Employee/EmployeeGetAllSummery",
        method:"GET",
        body:""
    }))
}

const useEmployeeSearchSummery = (temp) => {
    return useQuery(["employeeSearchByTemp", temp],useRequest({
        url:`api/Employee/EmployeeSearchSummery?temp=${temp}`,
        method:"GET",
        body: ''
    }))
}

const useEmployeeSearch = (id) => {
    return useQuery(['employeeSearchById',id],useRequest({
        url:`api/Employee/EmployeeSearch?id=${id}`,
        method:"GET",
        body:""
    }))
}
const useAddEmployee = (body) => {
    return useMutation(useRequest({
        url:`api/Employee/EmployeeAdd`,
        method:"POST",
        body: body
    })
    )
}
const useEditEmployee = (body) => {
    return useMutation(useRequest({
        url:`api/Employee/EmployeeUpdate`,
        method:"PUT",
        body: body
    })
    )
}
const useDelEmployee = (userId) => {
    return useMutation(useRequest({
        url:`api/Employee/EmployeeDelete?id=${userId}`,
        method:"DELETE",
        body: ''
    }))
}

const useListOfLoanTypes = () => {
    return useQuery('listOfLoanTypes', useRequest({
        url:'api/Loan/ListOfLoanTypes',
        method:"POST",
        body: ''
    })
	)
}
const useOrgChart = () => {
    return useQuery('OrgChart',useRequest(
		{
			url:"api/OrganizationChart/ShowPositions",
			method:"POST",
			body:""
		}
	))
}
const useSalaryFormulaTypes = () => {
    return useQuery('showSalaryFormulaTypes', useRequest({
		url: 'api/Salary/ShowSalaryFormulaTypes',
		method: 'POST',
		body: "",
	}))
}
const useSalaryItems = () => {
    return useQuery('showSalaryItems', useRequest({
		url: 'api/Salary/ShowSalaryItems',
		method: 'POST',
		body: "",
	}))
}
const useListOfRoles = () => {
    return useQuery('listOfRoles', useRequest({
		url: 'api/Authenticate/listOfRoles',
		method: 'POST',
		body: "",
	}))
}

export {
    useListOfContractTypes,
    useListOfUsers,
    useFindHokmsByUser,
    useListOfLoanTypes,
    useFindLoanByUser,
    useOrgChart,
    useSalaryFormulaTypes,
    useSalaryItems,
    useEmployeeGetAllSummery,
    useEmployeeSearchSummery,
    useEmployeeSearch,
    useListOfRoles,
    useAddEmployee,
    useEditEmployee,
    useDelEmployee
}