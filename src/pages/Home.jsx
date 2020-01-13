import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

import { InteractiveMap } from '../components/InteractiveMap';

const Home = () => {
   return (
      <IonPage>
         <IonHeader>
            <IonToolbar>
               <IonTitle>Ionic Blank</IonTitle>
            </IonToolbar>
         </IonHeader>
         <IonContent className='ion-padding'>
            The world is your oyster.
            <p>
               If you get lost, the{' '}
               <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://ionicframework.com/docs/'
               >
                  docs
               </a>{' '}
               will be your guide.
            </p>
            <InteractiveMap />
         </IonContent>
      </IonPage>
   );
};

export default Home;
