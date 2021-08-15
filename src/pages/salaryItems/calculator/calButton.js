import classes from './calculator.module.css';

const CalButton = ({onClick, size, value, label}) => {
    return(
        <div 
            className={classes.Button}
            onClick={(e) => onClick(e.target.getAttribute('data-value'))}
            data-size={size}
            data-value={value}
        >
            {label}
        </div>
    );
}
export default CalButton;