import classes from './dualListBox.module.css'

const Options = ({ options, onclick, optionsHandler }) => {
    console.log(options)
    let opt = options
    const clickHandler = (data) => {
        onclick(data)
        opt = options.map(item => {
            if(data.value != item.value){
                return item
            }
        })
    }
    console.log(opt)
    return (
        <nav className={classes.list_container}>
            <ul>
                {opt.map(item => (
                    <li key={item.value} onClick={() => clickHandler(item)}>
                        {item.label}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
 
export default Options;