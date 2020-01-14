import { IonContent, IonItem, IonList, IonMenu, IonMenuToggle } from '@ionic/react';
import React from 'react';
import { withRouter } from 'react-router';

const pages = [
   { title: 'Home', path: '/' },
   { title: 'Map', path: '/map' }
];

export class Menu extends React.Component {
   navigateToPage = page => {
      this.props.history.push(page);
   };

   renderMenuItems = () => {
      return pages.map(page => (
         <IonMenuToggle key={page.title}>
            <IonItem onClick={() => this.navigateToPage(page.path)}>
               {page.title}
            </IonItem>
         </IonMenuToggle>
      ));
   };

   render() {
      return (
         <IonMenu
            side='start'
            type='overlay'
            menuId='side-nav'
            contentId='main-outlet'
         >
            <IonContent>
               <IonList>{this.renderMenuItems()}</IonList>
            </IonContent>
         </IonMenu>
      );
   }
}

export default withRouter(Menu);
