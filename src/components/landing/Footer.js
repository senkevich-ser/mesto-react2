import React from 'react';



export default function Footer() {
   let date = new Date();

   return (
      <footer className="footer wrapper">
         <p className="footer__copyright margin">&copy; {date.getFullYear()}. Mesto Russia</p>
      </footer>
   )
}
