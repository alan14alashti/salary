import classes from './iconButton.module.css'

const DeleteIcon = ({onclick}) => {
    return (  
        <i onClick={onclick} className={`${classes.delete_icon} fas fa-trash-alt`}></i>
    );
}
const EditIcon = ({onclick}) => {
    return (  
        <i onClick={onclick} className={`${classes.edit_icon} fas fa-edit`}></i>
    );
}
const AddIcon = ({onclick}) => {
    return (
        <i onClick={onclick} className={`${classes.add_icon} fas fa-plus-square`}></i>
    );
}
 
export { 
    DeleteIcon,
    AddIcon,
    EditIcon
}