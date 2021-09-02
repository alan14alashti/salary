import Button from "../../../utils/button"
import { Select } from "../../../utils/input"

const DelPositionView = ({ BlurHandler, closeModal, clickHandler}) => {
    return (
        <div className="w-100 mx-auto">
			<form onSubmit={clickHandler}  className={`w-100 d-flex flex-column align-items-center`}>
				<Select
				 	options={[{value: 1, title:" حذف با فرزندان "}, {value: 0, title:" حذف سمت بدون حذف فرزندان "}]}
					defaultOpt="انتخاب کنید"
					required="false"
					label=" انتخاب نوع حذف "
					changeHandler={BlurHandler}
					id="deleteChildren"
					name="deleteChildren"
				/>
				<div className="col-12 d-flex justify-content-between align-items-start my-3">
                    <Button type="submit" sty="secondary" text=" ثبت "/>
                    <Button onclick={closeModal} sty="danger" text=" انصراف "/>
                </div>
			</form>
		</div>
    );
}
 
export default DelPositionView;