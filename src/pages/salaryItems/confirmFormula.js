import Button from "../../utils/button";
import Calculator from "./calculator/calculator";
const ConfirmFormula = ({closeModal}) => {
    return (
        <div>
            <Calculator/>
            <div className="col-12 d-flex justify-content-between mt-3">
                <Button type="submit" sty="secondary" text=" ثبت "/>
                <Button onclick={closeModal} sty="danger" text=" انصراف "/>
            </div>
        </div>
    );
}
 
export default ConfirmFormula;