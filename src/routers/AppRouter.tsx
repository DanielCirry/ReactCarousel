import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import BaseLayout from "../components/BaseLayout";
import List from "../Pages/ListPage";
import NotFound from "../Pages/NotFound";

const history = createHistory();

export default class AppRouter extends React.Component {
  render() {
    return (
      <BaseLayout>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={List} />
            <Route path="/notfound" component={NotFound} />
            <Redirect to={"/notfound"} />
          </Switch>
        </Router>
      </BaseLayout>
    );
  }
}
