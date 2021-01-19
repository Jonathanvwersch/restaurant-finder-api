import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RestaurantsContextProvider } from "./contexts/RestaurantsContexts";
import { Home } from "./routes/Home";
import { RestaurantDetailPage } from "./routes/RestaurantDetailPage";
import { UpdatePage } from "./routes/UpdatePage";

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <RestaurantsContextProvider>
      <div className="App container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route
              exact
              path="/restaurants/:id"
              component={RestaurantDetailPage}
            ></Route>
            <Route
              exact
              path="/restaurants/:id/update"
              component={UpdatePage}
            ></Route>
          </Switch>
        </Router>
      </div>
    </RestaurantsContextProvider>
  );
};

export default App;
