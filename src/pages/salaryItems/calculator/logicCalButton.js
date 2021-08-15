import classes from './calculator.module.css';

const LogicCalButton = ({onClick, size, value, label}) => {
    return(
        <div 
            className={classes.logic_Button}
            onClick={(e) => onClick(e.target.getAttribute('data-value'))}
            data-size={size}
            data-value={value}
        >
            {label}
        </div>
    );
}
export default LogicCalButton;