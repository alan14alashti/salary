import Button from "../../utils/button";
import { Input, Select } from "../../utils/input";
import classes from './salaryItems.module.css'
import Modal from 'react-modal'
import ConfirmFormula from "./confirmFormula";

const FormAddEdit = ({modalHandler, changeRadio, radio, formState, options, BlurHandler, secondModalIsOpen, confirmHandler, clickHandler, closeModal}) => {
    return (
        <div className="w-100 mx-auto">
            <Modal
				isOpen={secondModalIsOpen}
				className={`${classes.content} col-md-7 col-sm-9 col-11`}
           		overlayClassName={`${classes.overlay}`}
	        >
                <ConfirmFormula onConfirm={confirmHandler} closeModal={modalHandler}/>
            </Modal>
			<form onSubmit={clickHandler} className={`w-100 d-flex flex-column align-items-center`}>
				<h3> ویرایش آیتم حقوق </h3>
                <div className="w-100 col-12 row row-cols-1 row-cols-xl-3 row-cols-md-2 gx-3 gy-2">
                    <div className="col">
                        <Input
                            
                            required="true"
                            label=" نام آیتم "
                            BlurHandler={BlurHandler}
                            id="title"
                            name="title"
                            type="text"
                        />
                    </div>
                    <div className="col">
                        <Input
                            required="true"
                            label=" نام نمایشی "
                            BlurHandler={() => console.log("blurr")}
                            id="itemShowingName"
                            name="itemShowingName"
                            type="text"
                        /> 
                    </div>
                    <div className="col">
                        <Select
                            options={options}
                            defaultOpt={options[formState.itemType].title}
                            required="false"
                            label=" نوع "
                            changeHandler={BlurHandler}
                            id="itemType"
                            name="itemType"
                        />
                    </div>
                </div>
                <div className={`${classes.formula_div_container} col-12`}>
                    <div className="my-2">
                        <input checked={radio == 0}  type="radio" id="user" name="user" value={0} onChange={changeRadio}/>
                        <label className="mx-3" htmlFor="user"> مقدار آن توسط کاربر تعیین میشود </label>
                    </div>
                    <div className="my-2">
                        <input checked={radio == 1}  type="radio" id="value" name="value" value={1} onChange={changeRadio}/>
                        <label className="mx-3" htmlFor="value">
                            <div className="d-flex align-items-center">
                                <span className="ms-2">مقدار آن برابر با</span>
                                <div>
                                    <Input
                                        required={false}
                                        label=""
                                        BlurHandler={(e) => console.log(e.target.value)}
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
                        <input checked={radio == 2} type="radio" id="formula" name="formula" value={2} onChange={changeRadio}/>
                        <label className="mx-3" htmlFor="formula">
                            <span className="mx-1">مقدار آن بر اساس فرمول است</span>
                            <Button type="button" onclick={modalHandler} sty="primary" text=" ثبت فرمول "/>
                        </label>
                    </div>
                    <div  className="col-12 mt-5 d-flex align-items-center justify-content-around">
                        <div>
                            <input type="checkbox" id="negValue" name="negValue"/>
                            <label className="me-2" for="negValue"> میتواند منفی باشد </label>
                        </div>
                        <div>
                            <input type="checkbox" id="isInsurance" name="isInsurance" checked={formState.isInsurance} onChange={BlurHandler}/>
                            <label className="me-2" for="isInsurance"> شامل بیمه </label>
                        </div>
                        <div>
                            <input defaultChecked="false" type="checkbox" id="isTax" name="isTax" checked={formState.isTax} onChange={BlurHandler}/>
                            <label className="me-2" for="isTax"> شامل مالیات </label>
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
 
export default FormAddEdit;