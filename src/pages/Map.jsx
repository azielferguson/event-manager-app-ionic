import { IonContent, IonPage } from '@ionic/react';
import React from 'react';

import Header from '../components/Header';

class Map extends React.Component {
   render() {
      return (
         <IonPage>
            <Header />
            <IonContent class='ion-padding'>
               <h1>Map</h1>
            </IonContent>
         </IonPage>
      );
   }
}

export default Map;
