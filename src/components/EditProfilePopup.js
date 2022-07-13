import React from 'react';
import Popup from './Popup';

export default function EditProfilePopup(props) {
   return (
      <>
         <Popup
            isClose={props.isClose}
            openedPopup={props.isClose}
            name={'editProfilePopup'}
            btnTitle={'Сохранить'}
            title={'Редактировать профиль'}>
            <input id="initial-input"
               name="name" type="text"
               placeholder="Имя Фамилия "
               defaultValue={""}
               className="input popup__input-text"
               maxLength="40"
               minLength="2"
            /* required */ />
            <span className="initial-input-error popup__error"></span>
            <input id="rank-input"
               name="about"
               type="text"
               placeholder="Род деятельности "
               defaultValue={""}
               className="input popup__input-text"
               maxLength="200"
               minLength="2"
               required />
            <span className="rank-input-error popup__error"></span>
         </Popup>
      </>
   )
}