import React from "react";

function InfoToolTip({ isOpen, onClose, message }) {
    return(
        <div className={`popup ${isOpen && 'popup_opened'}`}>
            <div className="popup__content">
                <button className="popup__close" onClick={onClose}></button>
                <p className="popup__text">{message}</p>
            </div>
        </div>
   );
}

export default InfoToolTip;