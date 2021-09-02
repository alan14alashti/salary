import PropTypes from "prop-types"
import { useState } from 'react'
import OrgUnitNodeView from './orgUnitNodeView'

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
        <OrgUnitNodeView
            nodeData={nodeData} 
            addModalHandler={addModalHandler} 
            editModalHandler={editModalHandler} 
            delModalHandler={delModalHandler} 
            modalIsOpen={modalIsOpen} 
            modalHandler={modalHandler} 
            modalDetHandler={modalDetHandler}
        />
    );
};
MahalKhedmatNode.propTypes = propTypes;
export default MahalKhedmatNode;