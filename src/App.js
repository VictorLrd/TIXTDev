import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeLayout } from './layouts/HomeLayout';

import './App.css'

export default class App extends Component {


  render() {
    return (
      <HomeLayout/>
    );
  }
}
