import React from 'react';
import Header from './landing/Header';
import Main from './Main';
import Footer from './landing/Footer';
import api from '../utils/Api';
import Popup from './Popup';
import EditeAvatarPopup from './EditeAvatarPopup';
import PopupWithImage from './PopupWithImage';

export default function App() {
   const [userInfo, setUserInfo] = React.useState({});
   const [cards, setCards] = React.useState([]);
   const [isPopupEditeAvatar, setIsPopupEditeAvatar] = React.useState(false);
   const [isPopupWithImage, setIsPopupWihImage] = React.useState(false);
   const [clickCard, setClickCard] = React.useState({});

   React.useEffect(() => {
      Promise.all([api.getInfoAboutUser(), api.getCards()])
         .then(([userInfo, cards]) => {
            setUserInfo(userInfo);
            setCards(cards);
         })
   }, [])

   const handleEditAvatarClick = () => {
      setIsPopupEditeAvatar(true);
   }
   const handleEditProfileClick = () => {

   }
   const handleAddPlaceClick = () => {

   }

   const handleClosePopup = () => {
      setIsPopupEditeAvatar(false);
      setIsPopupWihImage(false);
   }

   const handleCardClick = (card) => {
      setClickCard(card);
      setIsPopupWihImage(true)
   }


   return (
      <>
         <Header />
         <Main userInfo={userInfo} cards={cards} isOpen={handleEditAvatarClick} cardClick={handleCardClick} />
         <Footer />
         {isPopupEditeAvatar && <Popup
            isClose={handleClosePopup}
            openedPopup={isPopupEditeAvatar}
            name={'editAvatar'}
            btnTitle={'Сохранить'}
            title={'Обновить аватар'}>
            <EditeAvatarPopup />
         </Popup>}
         {isPopupWithImage && <PopupWithImage 
         clickCard={clickCard} 
         isOpen={isPopupWithImage} 
         onClose={handleClosePopup}/>}
      </>
   )
}