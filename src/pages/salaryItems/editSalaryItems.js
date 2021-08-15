import { useState } from "react";
import Swal from "sweetalert2";
import { useQueryClient, useMutation } from "react-query";
import Button from "../../utils/button";
import { Input, Select } from "../../utils/input";
import useRequest from "../../components/fetchReq";
import classes from './salaryItems.module.css'
import Modal from 'react-modal'
import ConfirmFormula from "./confirmFormula";
const EditSalaryItems = ({ id, closeModal }) => {
    const queryClient = useQueryClient()
    const [secondModalIsOpen, setsecondModalIsOpen] = useState(false)
    const modalHandler = () => {
        setsecondModalIsOpen(!secondModalIsOpen)
    }
    // const [formState, setFormState] = useState({
	// 	id: id,
    //     detailName: "",
    // 	detailValue: "",
    //     description: ""
    // })
    const BlurHandler = (event) => {
        let value = event.target.value
        const name = event.target.name
        // setFormState({
        //     ...formState,
        //     [name]: value
        // })
    }
    // const mutation = useMutation(useRequest({
    //     url:"api/Loan/EditLoanType",
    //     method:"POST",
    //     body: JSON.stringify(formState)
    // }), {
    //     onSuccess: (res) => {
    //         Swal.fire({
    // 			title: 'Success',
    //             text: res.data.message,
    //     		icon: 'success',
    // 			confirmButtonColor: '#0050F0',
    //             timer: 3000
    //         })
    //         // console.log(res)
    //         // const charts = queryClient.getQueryData("OrgChart")
    //         // console.log(charts)
    //         // QueryClient.refetchQueries("OrgChart")
    //         // queryClient.refetchQueries(["OrgChart"])
    //         queryClient.refetchQueries({ stale: true })
    //     },
    //     onError: (error) => {
    //         Swal.fire({
    //             title: 'Error!',
    //             text:  error.response.data.message,
    //             icon: 'error',
    //             confirmButtonColor: '#0050f0',
    //             confirmButtonText: 'امتحان دوباره',
    //             timer: 3000
    //         })
    //     }
    // }
    // )
	const clickHandler = (event) => {
		event.preventDefault();
        // mutation.mutate()
  	}
    const [radio, setRadio] = useState(null)
    const changeRadio = (id) => {
        setRadio(id)
    }
    return (
		<div className="w-100 mx-auto">
            <Modal
				isOpen={secondModalIsOpen}
				className={`${classes.content} col-md-7 col-sm-9 col-11`}
           		overlayClassName={`${classes.overlay}`}
	        >
                <ConfirmFormula closeModal={modalHandler}/>
            </Modal>
			<form onSubmit={(e) => clickHandler(e)}  className={`w-100 d-flex flex-column align-items-center`}>
				<h3> ویرایش آیتم حقوق </h3>
                <div className="w-100 col-12 row row-cols-1 row-cols-xl-3 row-cols-md-2 gx-3 gy-2">
                    <div className="col">
                        <Input
                        required="true"
                        label=" نام آیتم "
                        BlurHandler={BlurHandler}
                        id="itemName"
                        name="itemName"
                        type="text"
                        />
                    </div>
                    <div className="col">
                        <Input
                        required="true"
                        label=" نام نمایشی "
                        BlurHandler={BlurHandler}
                        id="itemShowingName"
                        name="itemShowingName"
                        type="text"
                        /> 
                    </div>   
                    <div className="col">
                        <Select
                        options={[{value: 1, title:" اضافات "}, {value: 0, title:" کسورات "}, {value: 2, title:" اطلاعات "}]}
                        defaultOpt="انتخاب کنید"
                        required="false"
                        label=" نوع "
                        changeHandler={BlurHandler}
                        id="type"
                        name="type"
                        />
                    </div>
                </div>
                <div className={`${classes.formula_div_container} col-12`}>
                    <div className="my-2">
                        <input checked={radio === 0}  type="radio" id="userSet" name="user" onChange={() => changeRadio(0)}/>
                        <label className="mx-3" htmlFor="userSet"> مقدار آن توسط کاربر تعیین میشود </label>
                    </div>
                    <div className="my-2">
                        <input checked={radio === 1}  type="radio" id="value" name="haveValue" onChange={() => changeRadio(1)}/>
                        <label className="mx-3" htmlFor="value">
                            <div className="d-flex align-items-center">
                                <span className="ms-2">مقدار آن برابر با</span>
                                <div>
                                    <Input
                                    required="false"
                                    label=""
                                    BlurHandler={BlurHandler}
                                    id="itemValue"
                                    name="itemValue"
                                    type="number"
                                    />
                                </div>
                                <span className="me-2">ریال است</span>
                            </div>
                        </label>
                    </div>
                    <div className="my-2">
                        <input checked={radio === 2} type="radio" id="formula" name="setFormula" onChange={() => changeRadio(2)}/>
                        <label className="mx-3" htmlFor="formula">
                            <span className="mx-1">مقدار آن بر اساس فرمول است</span>
                            <Button onclick={modalHandler} sty="primary" text=" ثبت فرمول "/>
                        </label>
                    </div>
                    <div className="col-12 mt-5 d-flex align-items-center justify-content-around">
                        <div>
                            <input type="checkbox" id="negValue" name="negValue" value="negative"/>
                            <label className="me-2" for="negValue"> میتواند منفی باشد </label>
                        </div>
                        <div>
                            <input type="checkbox" id="bimeInlude" name="bimeInlude" value="bime"/>
                            <label className="me-2" for="bimeInlude"> شامل بیمه </label>
                        </div>
                        <div>
                            <input type="checkbox" id="maliatInclude" name="maliatInclude" value="maliat"/>
                            <label className="me-2" for="maliatInclude"> شامل مالیات </label>
                        </div>
                    </div>
                </div>
				<div className="col-12 d-flex justify-content-between mt-3">
                    <Button type="submit" sty="secondary" text=" ثبت "/>
                    <Button onclick={closeModal} sty="danger" text=" انصراف "/>
                </div>
			</form>
		</div>
    );
}
export default EditSalaryItems;