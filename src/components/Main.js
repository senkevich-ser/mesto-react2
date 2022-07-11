import React from 'react';
import Card from './Card';

export default function Main(props) {
   return (
      <main className="content">
         <section className="lead">
            <div className="lead__titles">
               <button aria-label="Редактировать аватар" type="button" className="lead__avatarButton opacity"></button>
               <img className="lead__image" src={props.userInfo.avatar} alt="Фото пользователя" />
               <div className="lead__wrapper-titles">
                  <div className="lead__wrapper-title">
                     <h1 className="lead__title title-cutter">{props.userInfo.name}</h1>
                     <button aria-label="Внести изменения в форму" type="button" className="lead__pencil opacity"></button>
                  </div>
                  <p className="lead__subtitle title-cutter margin">{props.userInfo.about}</p>
               </div>
            </div>
            <button aria-label="Добавить карточку" type="button" className="lead__button opacity"></button>
         </section>
         <section className="foto-grid" aria-label="Фото красивых мест">
            {props.cards.map((card) => (
               <Card key={card._id} item={card} />
            ))}
         </section>
      </main>
   )
};