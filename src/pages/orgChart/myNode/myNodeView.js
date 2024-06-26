import '../dechart'
import Modal from 'react-modal'
import classes from '../orgChart.module.css'
import AddPosition from '../addOrgChart/addPosition';
import DelPosition from '../delOrgChart/delPosition';
import EditPosition from '../editOrgChart/editPosition';

const MyNodeView = ({ delModalHandler, editModalHandler, addModalHandler, modalHandler, modalIsOpen, modalDetHandler, nodeData }) => {
    return (
        <div>
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
}
 
export default MyNodeView;