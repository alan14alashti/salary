import '../mahalKhedmatChart.css'
import classes from '../mahalKhedmat.module.css'
import Modal from 'react-modal'
import DelLocationNode from '../delLocation/delLocationNode'
import AddLocationNode from '../addLocation/addLocationNode'
import EditLocationNode from '../editLocation/editLocationNode'

const OrgUnitNodeView = ({ nodeData, addModalHandler, editModalHandler, delModalHandler, modalIsOpen, modalHandler, modalDetHandler}) => {
    return (
        <div >
            <div className="position">
                <span>
                    {nodeData.unitName}
                </span>
                <div className="dropdown">
                    <i className="cursor-pointer m-0 p-0 fs-3 fas fa-ellipsis-h"></i>
                    <div className="dropdown-content">
                    <div onClick={addModalHandler} className="w-100 p-1 d-flex justify-content-start">
                            <i className="mx-2 fas fa-plus"></i>
                            <span> اضافه کردن </span>
                        </div>
                        <div onClick={editModalHandler} className="w-100 p-1 d-flex justify-content-start">
                            <i className="mx-2 fas fa-pencil-alt"></i>
                            <span> تغییر </span>
                        </div>
                        <div onClick={delModalHandler} className="w-100 p-1 d-flex justify-content-start">
                            <i className="mx-2 fas fa-trash-alt"></i>
                            <span>حذف</span>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                className={`${classes.content} col-xxl-3 col-xl-4 col-lg-5 col-md-6 col-sm-8 col-10`}
                overlayClassName={`${classes.overlay}`}
            >
                {
                    modalDetHandler === 1 ? <AddLocationNode nodeData={nodeData} closeModal={modalHandler}/>:
                    modalDetHandler === 0 ? <DelLocationNode nodeData={nodeData} closeModal={modalHandler}/>:
                    modalDetHandler === 2 ? <EditLocationNode nodeData={nodeData} closeModal={modalHandler}/>:
                    null
                }
            </Modal>
        </div>
    );
}
 
export default OrgUnitNodeView;