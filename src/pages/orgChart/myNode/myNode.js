import PropTypes from "prop-types";
import { useState } from 'react';
import MyNodeView from './myNodeView';

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
        <MyNodeView 
            nodeData={nodeData} 
            modalIsOpen={modalIsOpen} 
            modalHandler={modalHandler} 
            editModalHandler={editModalHandler} 
            addModalHandler={addModalHandler} 
            delModalHandler={delModalHandler} 
            modalDetHandler={modalDetHandler}
        />
    );
};
MyNode.propTypes = propTypes;
export default MyNode;
