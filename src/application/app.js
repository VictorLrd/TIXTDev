import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserList from '../containers/user_list';
import UserDetail from '../containers/user_detail';
import Voiture_detail from '../containers/voiture_detail';
import VoitureList from '../layouts/VoitureList';
import HomeLayout from '../layouts/HomeLayout';
import InscriptionLayout from '../layouts/InscriptionLayout';
import VoitureInscription from '../layouts/VoitureInscription';



export default class App extends Component {
  render() {
    return (
<BrowserRouter>
        <div className="main">
        
        <Switch>
            <Route path="/voitures">
              <VoitureList/>
            </Route>
            <Route path="/home">
              <HomeLayout/>
            </Route>
            <Route path="/inscription">
              <InscriptionLayout/>
            </Route>
            <Route path="/new_voiture">
              <VoitureInscription/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
