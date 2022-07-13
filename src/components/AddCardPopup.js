import React from 'react';
import Popup from './Popup';

export default function AddCardPopup(props) {
   return (
      <>
         <Popup
            isClose={props.isClose}
            openedPopup={props.openedPopup}
            name={'addCardPopup'}
            btnTitle={'Создать'}
            title={'Новое место'}>

            <input id="place-input"
               name="placeName"
               type="text"
               placeholder="Название "
               defaultValue={""}
               className="input popup-card__input-text popup__input-text"
               minLength="1"
               maxLength="30"
          /* required */ />
            <span className="place-input-error popup__error"></span>
            <input
               id="link-input"
               name="linkName"
               type="url"
               placeholder="Ссылка на картинку "
               defaultValue={""}
               className="input popup-card__input-text popup__input-text"
          /* required */ />
            <span className="link-input-error popup__error"></span>
         </Popup>
      </>
   )
}