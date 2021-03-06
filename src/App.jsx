import './theme/variables.css';
import '@ionic/react/css/core.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/typography.css';

import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import Menu from './components/Menu';
import Home from './pages/Home';
import Map from './pages/Map';

/* Core CSS required for Ionic components to work properly */
/* Basic CSS for apps built with Ionic */
/* Optional CSS utils that can be commented out */
/* Theme variables */
const App = props => (
   <IonApp>
      <IonReactRouter>
         <Menu />
         <IonRouterOutlet id='main-outlet'>
            <Route path='/home' component={Home} exact />
            <Route path='/map' component={Map} exact />
            <Route exact path='/' render={() => <Redirect to='/home' />} />
         </IonRouterOutlet>
      </IonReactRouter>
   </IonApp>
);

export default App;
