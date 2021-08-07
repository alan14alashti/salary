import Modal from 'react-modal'
import classes from './formModal.module.css'
const FormModal = ({ children, open ,modalHandler }) => {
    return (
        <Modal
			isOpen={open}
			className={`${classes.content} col-xl-3 col-lg-4 col-md-6 col-sm-8 col-10`}
           	overlayClassName={`${classes.overlay}`}
			>
			<div onClick={modalHandler}>
				<i className="fs-2 fas fa-times"></i>
			</div>
			{children}
		</Modal>
    );
}
 
export default FormModal;