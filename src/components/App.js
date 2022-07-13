import React from 'react';
import Header from './landing/Header';
import Main from './Main';
import Footer from './landing/Footer';
import api from '../utils/Api';
import Popup from './Popup';
import EditAvatarPopup from './EditAvatarPopup';
import PopupWithImage from './PopupWithImage';
import EditProfilePopup from './EditProfilePopup';
import AddCardPopup from './AddCardPopup';

export default function App() {
   const [userInfo, setUserInfo] = React.useState({});
   const [cards, setCards] = React.useState([]);
   const [isPopupEditAvatar, setIsPopupEditAvatar] = React.useState(false);
   const [isPopupWithImage, setIsPopupWihImage] = React.useState(false);
   const [isPopupCardDelete, setIsPopupCardDelete] = React.useState(false);
   const [isPopupEditProfile, setIsPopupEditProfile] = React.useState(false);
   const [isPopupAddCard, setIsPopupAddCard] = React.useState(false);
   const [clickCard, setClickCard] = React.useState({});

   React.useEffect(() => {
      Promise.all([api.getInfoAboutUser(), api.getCards()])
         .then(([userInfo, cards]) => {
            setUserInfo(userInfo);
            setCards(cards);
         })
   }, [])

   const handleEditAvatarClick = () => {
      setIsPopupEditAvatar(true);
   }
   const handleEditProfileClick = () => {
      setIsPopupEditProfile(true)
   }
   const handleAddPlaceClick = () => {
      setIsPopupAddCard(true);
   }


   const handleClosePopup = () => {
      setIsPopupEditAvatar(false);
      setIsPopupEditProfile(false)
      setIsPopupAddCard(false);
      setIsPopupWihImage(false);
      setIsPopupCardDelete(false);
   }

   const handleCardClick = (card) => {
      setClickCard(card);
      setIsPopupWihImage(true)
   }

   const handleCardDelete = (card) => {
      setIsPopupCardDelete(true);
      console.log(card)
   }


   return (
      <>
         <Header />
         <Main userInfo={userInfo}
            cards={cards}
            isOpen={{ handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick }}
            cardClick={handleCardClick}
            cardDeleteClick={handleCardDelete} />
         <Footer />
         {isPopupEditAvatar && <Popup
            isClose={handleClosePopup}
            openedPopup={isPopupEditAvatar}
            name={'editAvatar'}
            btnTitle={'Сохранить'}
            title={'Обновить аватар'}>
            <EditAvatarPopup />
         </Popup>}
         {isPopupWithImage && <PopupWithImage
            clickCard={clickCard}
            isOpen={isPopupWithImage}
            onClose={handleClosePopup} />}
         {isPopupCardDelete && <Popup
            openedPopup={isPopupCardDelete}
            isClose={handleClosePopup}
            name={'deleteCardPopup'}
            btnTitle={'Да'}
            title={'Вы увeрены?'}
         />}
         {isPopupEditProfile && <EditProfilePopup
            isClose={handleClosePopup}
            openedPopup={isPopupEditProfile} />}
         {isPopupAddCard && <AddCardPopup
            isClose={handleClosePopup}
            openedPopup={isPopupAddCard} />}
      </>
   )
}