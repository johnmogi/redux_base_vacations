import * as React from "react";
import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Vacations } from "../pages/vacations";
import { NotFound } from "../pages/not-found";
import { vacPage } from "../pages/one-vacation";
import { AdminPage } from "../pages/auth/admin";

export class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/vacations" component={Vacations} exact />
          <Route path="/vacations/:id" component={vacPage} exact />
          <Route path="/admin/" component={AdminPage} exact />
          <Route path="" component={NotFound} exact />
        </Switch>
      </div>
    );
  }
}
