import classes from './button.module.css'
const Button = ( { sty, text, onclick, type }) => {
    const style = sty
    return (
        <button type={type} onClick={onclick} className={`${classes.button} ${style === "danger" ? classes.button_danger : style === "primary" ? classes.button_primary : style === "secondary"? classes.button_secondary : null}`}> {text} </button> 
    );
}
export default Button;