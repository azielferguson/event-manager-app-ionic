import { IonContent, IonPage } from '@ionic/react';
import React from 'react';

class Home extends React.Component {
   constructor(props) {
      super(props);
      this.sideNavRef = React.createRef();
   }

   render() {
      return (
         <IonPage>
            <IonContent className='ion-padding'>
               THis is some content.
            </IonContent>
         </IonPage>
      );
   }
}

export default Home;
