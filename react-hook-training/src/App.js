import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderHome from "./component/Home/Header/HeaderHome";
import Profile from "./component/Profile/Profile";
import PageNotFound from "./pages/404/PageNotFound";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Todolist from "./pages/Todolist/Todolist";
import TodolistRCC from "./pages/Todolist/TodolistRCC";
function App() {
  return (
    <BrowserRouter>
      <HeaderHome />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/todolist" component={Todolist} />
        <Route exact path="/todolistrcc" component={TodolistRCC} />
        <Route exact path="*" component={PageNotFound} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
