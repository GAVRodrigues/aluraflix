import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import cadastroVideo from "./pages/Cadastro/Video";
import cadastroCategoria from "./pages/Cadastro/Categoria";
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={cadastroVideo} />
      <Route path="/cadastro/categoria" component={cadastroCategoria} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);