import classes from './calculator.module.css'

const DisplayCal = ({data}) => {
    return(
        <div className={classes.Display}>
            {data}
        </div>
    );
}

export default DisplayCal;