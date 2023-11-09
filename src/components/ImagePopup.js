import React from "react";

function ImagePopup({ card, onClose }) {
    return (
      <div className={`popup popup_form_image ${card ? 'popup_opened' : ''}`}>
        <div className="popup-image-container">
          <img src={card?.link} alt={card?.name} className="popup-image-container__image-fullscreen" />
          <h2 className="popup-image-container__title-fullscreen">{card?.name}</h2>
          <button type="button" className="popup-image-container__close-button popup-close" onClick={onClose}></button>
        </div>
      </div>
    );
  }

export default ImagePopup;