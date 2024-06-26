import { useState } from "react";
import Swal from "sweetalert2";
import { useQueryClient, useMutation } from "react-query";
import Button from "../../utils/button";
import { Input, Select } from "../../utils/input";
import useRequest from "../../components/fetchReq";
import classes from './salaryItems.module.css'
import Modal from 'react-modal'
import ConfirmFormula from "./confirmFormula";
import FormAddEdit from "./formAddEdit";
const EditSalaryItems = ({ data, closeModal }) => {
    const options = [{value: 0, title:" اطلاعات "},{value: 1, title:" اضافات "},{value: -1, title:" کسورات "}]
    console.log(data)
    const queryClient = useQueryClient()
    const [radio, setRadio] = useState(2)
    const changeRadio = (e) => {
        const name = e.target.name
        if(name === "formula"){
            setRadio(2)
            setFormState({
                ...formState,
                formula:formulaHandle.formula
            })
        }
        if(name === "value"){
            setRadio(1)
            setFormState({
                ...formState,
                formula:formulaHandle.value
            })
        }
        if(name === "user"){
            setRadio(0)
            setFormState({
                ...formState,
                formula:formulaHandle.canSetByUser
            })
        }
    }
    const [secondModalIsOpen, setsecondModalIsOpen] = useState(false)
    const modalHandler = () => {
        setsecondModalIsOpen(!secondModalIsOpen)
    }
    const [formulaHandle, setFormulaHandle] = useState({
        formula: "",
        value:"",
        canSetByUser:true
    })
    const [formState, setFormState] = useState({
        title: data.title,
        formula:data.formula,
        isActive: data.isActive,
        isTax: data.isTax,
        isInsurance: data.isInsurance,
        canUserEditValue: data.canUserEditValue,
        itemType: data.itemType
    })
    const BlurHandler = (event) => {
        let value = event.target.value
        const name = event.target.name
        switch(name){
            case "isTax":
                setFormState({
                    ...formState,
                    isTax: event.target.checked
                });
                break;
            case "isInsurance":
                setFormState({
                    ...formState,
                    isInsurance: event.target.checked
                });
                break;
            case "isActive":
                setFormState({
                    ...formState,
                    isActive: event.target.checked
                });
                break;
            case "canUserEditValue":
                setFormState({
                    ...formState,
                    canUserEditValue: event.target.checked
                });
                break;
            case "itemType":
                setFormState({
                    ...formState,
                    itemType: Number(value)
                });
                break;
            default:
                setFormState({
                    ...formState,
                    [name]: value
                })
        }
    }
    const confirmHandler = (data) => {
        setFormState({
            ...formState,
            formula:data
        })
    }
    const mutation = useMutation(useRequest({
        url:`api/Salary/EditSalaryItem?id=${data.id}`,
        method:"POST",
        body: JSON.stringify(formState)
    }), {
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
            closeModal()
        },
        onError: (error) => {
            Swal.fire({
                title: 'Error!',
                text:  error.response.data.message,
                icon: 'error',
                confirmButtonColor: '#0050F0',
                confirmButtonText: 'امتحان دوباره',
                timer: 3000
            })
        }
    }
    )
	const clickHandler = (e) => {
        e.preventDefault()
        mutation.mutate()
  	}
    return (
		<FormAddEdit 
            confirmHandler={confirmHandler}
            clickHandler={clickHandler}
            BlurHandler={BlurHandler}
            changeRadio={changeRadio}
            radio={radio}
            modalHandler={modalHandler}
            secondModalIsOpen={secondModalIsOpen}
            closeModal={closeModal}
            options={options}
            formState={formState}
        />
    );
}
export default EditSalaryItems;