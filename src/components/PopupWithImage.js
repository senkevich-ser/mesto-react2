import React from 'react';

export default function PopupWithImage(props){

    const[classPopup,setClassPopup]=React.useState('')
    function stoppedOpenPopup(){
        setClassPopup(` ${props.isOpen?'popup_opened':''}`);
      }
  
      setTimeout(stoppedOpenPopup,100);

return(
    <div className={`foto-open popup ${classPopup}`}>
    <div className=" foto-open__container">
      <img className="foto-open__image" src={props.clickCard.link} alt={props.clickCard.name} />
      <button aria-label="Закрыть фото" type="button" className=" popup__close-cross opacity" onClick={props.onClose}></button>
      <h2 className="foto-open__name">{props.clickCard.name}</h2>
    </div>
  </div>
)
}