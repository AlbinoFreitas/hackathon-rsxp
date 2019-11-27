import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Details from "./pages/Details";
import Videocall from "./pages/Videocall";

export default function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/details/:id" component={Details} />
        <Route path="/videocall" component={Videocall} />
      </Switch>
    </HashRouter>
  );
}
