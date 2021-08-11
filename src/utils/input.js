import classes from './input.module.css'
const Input = ({ type, name, id, BlurHandler, label, required, changeHandler}) => {
    return (
        <div className="w-100 d-flex align-items-start flex-column">
            <label htmlFor={id} className={classes.form_input_label}>{label}</label>
            <input 
                onBlur={(e) => BlurHandler(e)}
                onChange={(e) => BlurHandler(e)}
				id={id}
				name={name}
				type={type}
                className={classes.form_input}
                required={required}
            >
            </input>
        </div>
    );
}
const Select = ( {id, label, name, options, defaultOpt, required, changeHandler}) => {
    return(
        <div className="w-100 d-flex align-items-start flex-column">
            <label htmlFor={id} className={classes.form_input_label}>{label}</label>
            <select 
                onChange={(e) => changeHandler(e)}
                className={classes.form_input}
                required={required} 
                name={name} 
                id={name}
            >
                <option selected hidden disabled>{defaultOpt}</option>
                {options.map((option,index) => (
                    <option 
                    key={index} 
                    value={option.value}
                    >
                        {option.title}
                    </option>
                ))
                }
            </select>
        </div>
    )
}
export { 
    Input,
    Select
}
