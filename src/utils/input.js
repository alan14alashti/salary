import classes from './input.module.css'
const Input = ({ placeHolder, value, type, name, id, BlurHandler, label, required, changeHandler}) => {
    return (
        <div className="w-100 d-flex align-items-start flex-column">
            {label?
                <label htmlFor={id} className={classes.form_input_label}>{label}</label>:
                null
            }
            <input  
                placeholder={placeHolder}
                value={value}
                onBlur={BlurHandler ? (e) => BlurHandler(e) : null}
                onChange={changeHandler ? (e) => changeHandler(e) : null}
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
const Select = ( {value, id, label, name, options, defaultOpt, required, changeHandler}) => {
    return(
        <div className="w-100 d-flex align-items-start flex-column">
            {label?
                <label htmlFor={id} className={classes.form_input_label}>{label}</label>:
                null
            }
            <select 
                value={value}
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
