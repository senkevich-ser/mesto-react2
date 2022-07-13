import React from 'react';


export default function Card(props) {

   const [isLiked, setIsLiked] = React.useState(false);
   React.useEffect(() => {
      if (props.item.likes.some((like) => (
         like._id === props.userInfo._id
      ))) {
         setIsLiked(true)
      }
   }, [props.userInfo._id,props.item.likes])


   function handleCardClick() {
      props.onCardClick(props.item)
   }
   function handleCardDelete() {
      props.cardDeleteClick(props.item)
   }

   function likeClick() {
      setIsLiked(!isLiked)
   }


   return (
      <div className="foto-grid__card">
         <div className={`foto-grid__urn ${props.item.owner._id === props.userInfo._id ? 'foto-grid__urn_show' : ''}`} onClick={handleCardDelete}></div>
         <img src={props.item.link} alt={props.item.name} className="foto-grid__item" onClick={handleCardClick} />
         <div className="foto-grid__name">
            <h2 className="foto-grid__name-title title-cutter">{props.item.name}</h2>
            <div className="foto-grid__likesBlock">
               <button aria-label="Поставить лайк" type="button" className={`foto-grid__name-heart ${isLiked ? 'foto-grid__name-heart_black' : ''}`} onClick={likeClick}></button>
               <div className="foto-grid__likesQty">{props.item.likes.length}</div>
            </div>
         </div>
      </div>
   )
}