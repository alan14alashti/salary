import { useQuery, useMutation } from "react-query"
import useRequest from "../components/fetchReq"

const useListOfContractTypes = () => {
  return useQuery('listOfContractTypes', useRequest({
    url:"api/Contract/ListOfContractDetails",
    method:"POST",
    body:""
}))
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
export {
    useListOfContractTypes,
    useListOfUsers,
    useFindHokmsByUser,
    useListOfLoanTypes,
    useFindLoanByUser,
    useOrgChart,
    useSalaryFormulaTypes,
    useSalaryItems
}