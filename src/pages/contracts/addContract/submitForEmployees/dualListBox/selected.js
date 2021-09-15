import classes from './dualListBox.module.css'

const Selected = ({selected}) => {
    return (
        <nav className={classes.list_container}>
            <ul>
                {selected.map(item => (
                    <li key={item.value} onClick={() => console.log(item.value)}>
                        {item.label}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
 
export default Selected;