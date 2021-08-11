import './mahalKhedmatChart.css'
import classes from './mahalKhedmat.module.css'
import Modal from 'react-modal'
import PropTypes from "prop-types"
import { useState } from 'react'
import DelNode from './delNode'
import AddNode from './addNode'
import EditNode from './editNode'
const propTypes = {
  nodeData: PropTypes.object.isRequired
};
const MahalKhedmatNode = ({ nodeData }) => {
    const [modalDetHandler, setModalDetHandler] = useState(null)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const modalHandler = () => {
        setModalIsOpen(!modalIsOpen)
    }
    const addModalHandler = () => {
        setModalIsOpen(true)
        setModalDetHandler(1)
    }
    const delModalHandler = () => {
        setModalIsOpen(true)
        setModalDetHandler(0)
    }
    const editModalHandler = () => {
        setModalIsOpen(true)
        setModalDetHandler(2)
    }
    return (
      <div >
        <div className="position">
            <span>
                {nodeData.title}
            </span>
            <div className="dropdown">
                <i className="cursor-pointer m-0 p-0 fs-3 fas fa-ellipsis-h"></i>
                <div className="dropdown-content">
                    <div onClick={delModalHandler} className="w-100 p-1 d-flex justify-content-start">
                        <i className="mx-2 fas fa-trash-alt"></i>
                        <span>حذف</span>
                    </div>
                    <div onClick={addModalHandler} className="w-100 p-1 d-flex justify-content-start">
                        <i className="mx-2 fas fa-plus"></i>
                        <span> اضافه کردن </span>
                    </div>
                    <div onClick={editModalHandler} className="w-100 p-1 d-flex justify-content-start">
                        <i className="mx-2 fas fa-pencil-alt"></i>
                        <span> تغییر </span>
                    </div>
                </div>
            </div>
        </div>
        <Modal
			isOpen={modalIsOpen}
			className={`${classes.content} col-xl-3 col-lg-4 col-md-6 col-sm-8 col-10`}
           	overlayClassName={`${classes.overlay}`}
        >
	        {
                modalDetHandler === 1 ? <AddNode nodeData={nodeData} closeModal={modalHandler}/>:
                modalDetHandler === 0 ? <DelNode nodeData={nodeData} closeModal={modalHandler}/>:
                modalDetHandler === 2 ? <EditNode nodeData={nodeData} closeModal={modalHandler}/>:
                null
            }
        </Modal>
      </div>
    );
};
MahalKhedmatNode.propTypes = propTypes;
export default MahalKhedmatNode;