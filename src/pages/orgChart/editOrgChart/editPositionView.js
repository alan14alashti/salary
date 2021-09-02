import Button from "../../../utils/button"
import { Select, Input } from "../../../utils/input"

const EditPositionView = ({clickHandler, formState, BlurHandler, nodeData, positions, closeModal}) => {
    return (
        <div className="w-100 mx-auto">
			<form onSubmit={clickHandler}  className={`w-100 d-flex flex-column align-items-center`}>
                <Input
                    value={formState.title}
					required="true"
					label="عنوان شغلی"
					changeHandler={BlurHandler}
					id="title"
					name="title"
					type="text"
				/>
				<Select 
                    disabled={nodeData.parentId == null ? true : false }
                    value={formState.parentId}
				 	options={positions}
					defaultOpt=" انتخاب کنید "
					required="false"
					label=" انتخاب سرپرست "
					changeHandler={BlurHandler}
					id="parentId"
					name="parentId"
				/>
                <Select
                    disabled={nodeData.parentId == null ? true : false}
					options={[{value: 1, title:"تغییر با فرزندان"}, {value: 0, title:" نغییر بدون فرزندان "}]}
					defaultOpt="انتخاب کنید"
					required="false"
					label=" انتخاب نوع تغییر "
					changeHandler={BlurHandler}
					id="isChildMove"
					name="isChildMove"
				/>
				<div className="col-12 d-flex justify-content-between align-items-start my-3">
                    <Button type="submit" sty="secondary" text=" ثبت "/>
                    <Button onclick={closeModal} sty="danger" text=" انصراف "/>
                </div>
			</form>
		</div>
    );
}
 
export default EditPositionView;