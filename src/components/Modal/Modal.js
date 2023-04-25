import React, { Fragment }  from "react";
import "./Modal.css";
import image from '../../img/close.png'

const Modal = ({ onClose }) => {
    return (
        <Fragment>
            <div className="modal-wrapper" onClick={onClose}></div>
            <div className="modal-window">
                <button className="close-button" onClick={onClose}> 
                    <img className="close-img" src={image} alt={'error'}/> 
                </button>
                <h2 style={{color:"orange"}}>Modal Window Title</h2>
                <p>Modal content ...</p>     
                <p>Modal content ...</p>    
                <button className={'confirmation-button'} onClick={onClose}>ОK</button>     
                <button className={'reject-button'} onClick={onClose}>Cancel</button>           
            </div>
        </Fragment>
    )
}

export default Modal;