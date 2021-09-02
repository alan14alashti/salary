import {Input} from "../../../utils/input"
import Button from "../../../utils/button"

const AddLocationView = ({ closeModal, clickHandler, BlurHandler, nodeData}) => {
    return (
        <div className="w-100 mx-auto">
			<form onSubmit={clickHandler} className={`w-100 d-flex flex-column align-items-center`}>
				<Input
					required="true"
					label="عنوان محل خدمت"
					changeHandler={BlurHandler}
					id="unitName"
					name="unitName"
					type="text"
				/>
				<span> محل خدمت مورد نظر به زیر  گروه  {nodeData.unitName}اضافه میشود </span>
				<div className="col-12 d-flex justify-content-between align-items-start my-3">
					<Button type="submit" sty="secondary" text=" ثبت "/>
					<Button onclick={closeModal} sty="danger" text=" انصراف "/>
				</div>
			</form>
		</div>
    );
}
 
export default AddLocationView;