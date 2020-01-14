import { IonContent, IonItem, IonList, IonMenu, IonMenuToggle } from '@ionic/react';
import React from 'react';

const pages = [{ title: 'Home', path: '/' }];

const Menu = props => {
   const navigateToPage = page => {
      // props.history.push(page);
      console.log('navigating');
   };

   const renderMenuItems = () => {
      return (
         <IonMenuToggle>
            <IonItem onClick={() => navigateToPage('/')}>Home</IonItem>
         </IonMenuToggle>
      );
   };

   return (
      <IonMenu
         side='start'
         type='overlay'
         menuId='side-nav'
         contentId='main-outlet'
      >
         <IonContent>
            <IonList>{renderMenuItems()}</IonList>
         </IonContent>
      </IonMenu>
   );
};

export default Menu;
