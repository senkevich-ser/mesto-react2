import React from 'react';

export default function EditeAvatarPopup(){
    return(
        <>
         <input id="avatar-input" name="avatar" type="url" placeholder="Ссылка на фото " defaultValue={''}
          className="input  popup__input-text" required />
        <span className="avatar-input-error popup__error"></span>
        </>
    )
}