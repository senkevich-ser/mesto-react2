import React from 'react';
import Header from './landing/Header';
import Main from './Main';
import Footer from './landing/Footer';
import api from '../utils/Api';

export default function App() {
   const [userInfo, setUserInfo] = React.useState({});
   const [cards, setCards] = React.useState([]);

   React.useEffect(() => {
      Promise.all([api.getInfoAboutUser(), api.getCards()])
         .then(([userInfo, cards]) => {
            setUserInfo(userInfo);
            setCards(cards);
         })
   }, [])

   const handleEditAvatarClick = () => {

   }
   const handleEditProfileClick = () => {

   }
   const handleAddPlaceClick = () => {

   }


   return (
      <>
         <Header />
         <Main userInfo={userInfo} cards={cards} />
         <Footer />
      </>
   )
}