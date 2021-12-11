import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './component/Landing'
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Login from './component/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/dashboard" component={Landing}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
