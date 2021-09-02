import {Input} from "../../../utils/input"
import Button from "../../../utils/button"

const AddPositionView = ({clickHandler, BlurHandler, closeModal, nodeData}) => {
    return (
        <div className="w-100 mx-auto">
			<form onSubmit={clickHandler} className={`w-100 d-flex flex-column align-items-center`}>
				<Input
					required="true"
					label="عنوان شغلی"
					changeHandler={BlurHandler}
					id="title"
					name="title"
					type="text"
				/>
				<span>  عنوان شغلی مورد نظر به زیر  گروه  {nodeData.title}اضافه میشود </span>
				<div className="col-12 d-flex justify-content-between align-items-start my-3">
					<Button type="submit" sty="secondary" text=" ثبت "/>
					<Button onclick={closeModal} sty="danger" text=" انصراف "/>
				</div>
			</form>
		</div>
    );
}
 
export default AddPositionView;