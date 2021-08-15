import classes from './calculator.module.css'

const CalKeypad = ({children}) => {
    return(
        <div className={classes.Keypad}>
            {children}
        </div>
    );
}

export default CalKeypad;