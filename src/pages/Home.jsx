import { IonContent, IonPage } from '@ionic/react';
import React from 'react';

import Header from '../components/Header';

class Home extends React.Component {
   render() {
      return (
         <IonPage>
            <Header />
            <IonContent class='ion-padding'>
               <h1>Home</h1>
            </IonContent>
         </IonPage>
      );
   }
}

export default Home;
