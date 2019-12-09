import React from 'react';
import NavBar from './component/home/nav'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import './App.css';
import About from './component/courseDetails/about';
import Course from './component/courseDetails/courses';
import Crash from './component/courseDetails/crashCourse'
import Test from './component/courseDetails/test'
import Registration from './component/user/registartion'
import Log from './component/login/log'
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <NavBar/> 
    <div>
      <Switch>
      <Route path="/" component={About} exact={true}/>
      <Route path="/course" component={Course} exact/>
      <Route path="/crash" component={Crash} exact/>
      <Route path="/test" component={Test} />
      <Route path="/users/register" component={Registration} exact/>
      <Route path="/login" component={Log} exact/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
