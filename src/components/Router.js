import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import NotFound from "./NotFound";
import App from "./App";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/game" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;
