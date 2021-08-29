import './defChart.css'
import Modal from 'react-modal'
import classes from './orgChart.module.css'
import PropTypes from "prop-types";
import { useState } from 'react';
import AddPosition from './addPosition';
import DelPosition from './delPosition';
import EditPosition from './editPosition';
const propTypes = {
  nodeData: PropTypes.object.isRequired
};
const MyNode = ({ nodeData }) => {
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
            <span>{nodeData.id}</span>
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
            ariaHideApp={false}
            className={`${classes.content} col-xxl-3 col-xl-4 col-lg-5 col-md-6 col-sm-8 col-10`}
            overlayClassName={`${classes.overlay}`}
        >
            {
                modalDetHandler === 1 ? <AddPosition closeModal={modalHandler} nodeData={nodeData}/> :
                modalDetHandler === 0 ? <DelPosition closeModal={modalHandler} nodeData={nodeData}/> :
                modalDetHandler === 2 ? <EditPosition closeModal={modalHandler} nodeData={nodeData}/> :
                null
            }
        </Modal>
      </div>
    );
};
MyNode.propTypes = propTypes;
export default MyNode;