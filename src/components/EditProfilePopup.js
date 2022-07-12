import React from 'react';

export default function EditProfilePopup() {
   return (
      <>
         <input id="initial-input" name="name" type="text" placeholder="Имя Фамилия " value=""
            className="input popup__input-text" maxlength="40" minlength="2" required />
         <span className="initial-input-error popup__error"></span>
         <input id="rank-input" name="about" type="text" placeholder="Род деятельности " value=""
            className="input popup__input-text" maxlength="200" minlength="2" required />
         <span className="rank-input-error popup__error"></span>
      </>
   )
}