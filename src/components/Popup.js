import React from 'react';

export default function Popup(props){

  const[classPopup,setClassPopup]=React.useState('')
    function stoppedOpenPopup(){
      setClassPopup(` ${props.openedPopup?'popup_opened':''}`);
    }

    setTimeout(stoppedOpenPopup,100)
    

return(
    <div className={`popup-avatar popup ${classPopup}`}>
    <div className="popup__container">
      <button aria-label="Закрыть попап" type="button" className="popup__close-cross opacity" onClick={props.isClose}></button>
      <h2 className="popup__title">{props.title}</h2>
      <form name={`form-${props.name}`} className="popup__inputs" noValidate>
       {props.children}
        <button aria-label="Сохранить новый аватар" type="submit" className="popup__submit-btn">
          {props.btnTitle}
        </button>
      </form>
    </div>
  </div>
)
}