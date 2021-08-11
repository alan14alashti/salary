import './defChart.css'
import Modal from 'react-modal'
import FormModal from "../../utils/formModal";
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
    const [registerIsOpen, setRegisterIsOpen] = useState(false);
    const modalHandler = () => {
        setRegisterIsOpen(!registerIsOpen)
    }
    const addModalHandler = () => {
        setRegisterIsOpen(true)
        setModalDetHandler(1)
    }
    const delModalHandler = () => {
        setRegisterIsOpen(true)
        setModalDetHandler(0)
    }
    const editModalHandler = () => {
        setRegisterIsOpen(true)
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
        <FormModal open={registerIsOpen} modalHandler={modalHandler}>
            {
                modalDetHandler === 1 ? <AddPosition nodeData={nodeData}/> :
                modalDetHandler === 0 ? <DelPosition nodeData={nodeData}/> :
                modalDetHandler === 2 ? <EditPosition nodeData={nodeData}/> :
                null
            }
        </FormModal>
      </div>
    );
};
MyNode.propTypes = propTypes;
export default MyNode;