import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SCSS from './assets/style.scss';

import HomeIndex from './components/home-page';
import BattleIndex from './components/battle-page';
import ItemsIndex from './components/items-page';
import ItemsShow from './components/items-page/Show.js';
import AnotherShow from './components/items-page/AnotherShow.js';

import Nav from './components/Nav.js';
import Footer from './components/Footer';

ReactDOM.render(
  <Router>
    <div>
    <Nav />
     <Switch>
      <Route exact path="/" component={HomeIndex} />
      <Route exact path="/battle" component={BattleIndex} />
      <Route exact path="/items" component={ItemsIndex} />
      <Route exact path="/items/show" component={ItemsShow} />
      <Route path="/items/:anothershow" component={AnotherShow} />
      <Route render={() => <p> <br/><br/>404 error <br/><br/>Not Found</p>}/>
     </Switch>
     <Footer />
    </div>
  </Router>, document.getElementById('app') );

// <Route path="/footer" component={Footer} />

// console.log("It's on!");


//
// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   static countUsers(){
//     console.log('there are 50 users');
//   }
//
//   register() {
//     console.log(this.username + ' is now registed');
//   }
// }
//
// class Member extends User {
//   constructor(username, email, password, memberPackage) {
//     super(username, email, password);
//     this.package = memberPackage;
//   }
//
//   getPackage() {
//     console.log(this.package + '- this is da package');
//   }
// }
//
// let mike = new Member('mike', 'mikes@email', 'pass123', 'memberpacagewhever')
//
//
// mike.register();
