/* Import statements */
import React from "react";
import { Route, Switch } from "react-router-dom";
import Category from "./Category";
import Products from "./Products";
import Login from "./Login";
import Admin from "./Admin";
import Home from "./Home";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/category/:name"
          render={({ match }) => (
            <div>
              {" "}
              <h3>
                {" "}
                {match.params.name}
              </h3>
            </div>
          )}
        />
        <Route path="/category" component={Category} />
        <Route path="/products" component={Products} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </div>
  );
};

export default Main;
