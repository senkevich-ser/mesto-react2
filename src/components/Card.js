import React from 'react';


export default function Card(props) {

   function handleCardClick(){
      props.onCardClick(props.item)
   }

   return (
      <div className="foto-grid__card">
         <div className="foto-grid__urn"></div>
         <img src={props.item.link} alt={props.item.name} className="foto-grid__item"  onClick={handleCardClick}/>
         <div className="foto-grid__name">
            <h2 className="foto-grid__name-title title-cutter">{props.item.name}</h2>
            <div className="foto-grid__likesBlock">
               <button aria-label="Поставить лайк" type="button" className="foto-grid__name-heart"></button>
               <div className="foto-grid__likesQty"></div>
            </div>
         </div>
      </div>
   )
}