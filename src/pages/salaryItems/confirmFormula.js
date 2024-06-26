import { useState } from "react";
import Button from "../../utils/button";
import CalButton from './calculator/calButton';
import classes from './calculator/calculator.module.css'
import CalDisplay from './calculator/display';
import CalKeypad from './calculator/calKeypad';
import LogicCalButton from './calculator/logicCalButton';
import Tree from './calculator/treeExample';
const ConfirmFormula = ({closeModal, onConfirm}) => {
    const [data, setData] = useState('')
    const handleClick = value => {
        switch(value) {
            case 'clear':
                setData('');
                break;
            default: 
                setData(data + "" + value);
        }
    }
    const submitHandler  = (event) => {
        event.preventDefault();
        onConfirm(data)
        closeModal()
    }
    return (
        <div>
            <div >
                <div className={classes.show_formula_section}>
                    <CalDisplay data={data}/>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <div className={classes.Calculator}>
                        <CalKeypad>
                
                            <CalButton onClick={handleClick} label="7" value="7" />
                            <CalButton onClick={handleClick} label="4" value="4" />
                            <CalButton onClick={handleClick} label="1" value="1" />
                            <CalButton onClick={handleClick} label="C" value="clear"/>
                            
                            <CalButton onClick={handleClick} label="8" value="8" />
                            <CalButton onClick={handleClick} label="5" value="5" />
                            <CalButton onClick={handleClick} label="2" value="2" />
                            <CalButton onClick={handleClick} label="0" value="0" />
                            {/* <CalButton onClick={handleClick} label="." value="." />

                            <CalButton onClick={handleClick} label="x" value="*" /> */}
                            <CalButton onClick={handleClick} label="9" value="9" />
                            <CalButton onClick={handleClick} label="6" value="6" />
                            <CalButton onClick={handleClick} label="3" value="3" />
                            <CalButton onClick={handleClick} label="." value="." />

                            <CalButton onClick={handleClick} label="/" value=" / " />
                            <CalButton onClick={handleClick} label="*" value=" * " />
                            <CalButton onClick={handleClick} label="-" value=" - " />
                            <CalButton onClick={handleClick} label="+" size="2" value=" + " />

                        </CalKeypad>
                    </div>
                    <div className={classes.second_calculator}>
                        <CalKeypad>

                            <LogicCalButton onClick={handleClick} label=" پس " value= "[پس]"/>
                            <LogicCalButton onClick={handleClick} label=" = " value=" = "/>
                            <LogicCalButton onClick={handleClick} label=" یا " value="[یا]"/>
                            
                            <LogicCalButton onClick={handleClick} label=" آنگاه " value="[آنگاه]"/>
                            <LogicCalButton onClick={handleClick} label=" بزرگتر " value="[بزرگتر]"/>
                            <LogicCalButton onClick={handleClick} label=" و " value="[و]" />
                            {/* <CalButton onClick={handleClick} label="." value="." />

                            <CalButton onClick={handleClick} label="x" value="*" /> */}
                            <LogicCalButton onClick={handleClick} label=" اگر " value="[اگر]"/>
                            <LogicCalButton onClick={handleClick} label=" کوچکتر " value="[کوچکتر]"/>
                            <LogicCalButton onClick={handleClick} label=" مخالف " value="[مخالف]"/>

                            <LogicCalButton onClick={handleClick} label=")" value=" ) " />
                            <LogicCalButton onClick={handleClick} label="(" value=" ( " />
                        </CalKeypad>
                    </div>
                    <Tree handleClick={handleClick}/>
                </div>
            </div>
            <form onSubmit={submitHandler} className="col-12 d-flex justify-content-between mt-3">
                <Button type="submit" sty="secondary" text=" ثبت "/>
                <Button onclick={closeModal} sty="danger" text=" انصراف "/>
            </form>
        </div>
    );
}
 
export default ConfirmFormula;