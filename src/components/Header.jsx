import { IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

class Header extends React.Component {
   render() {
      return (
         <IonHeader translucent='true'>
            <IonToolbar>
               <IonButtons slot='start'>
                  <IonMenuButton
                     autoHide='false'
                     fill='clear'
                     color='dark'
                     slot='start'
                  />
               </IonButtons>
               <IonTitle>World Expo 2020</IonTitle>
            </IonToolbar>
         </IonHeader>
      );
   }
}

export default Header;
