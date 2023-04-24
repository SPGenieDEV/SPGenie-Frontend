import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Routes from "./routes";
import CoreRoutes from "./routes/CoreRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Switch>
          <Route path="/dashboard">
            <CoreRoutes />
          </Route>
        </Switch>
      </Routes>
    </Router>
  );
}

export default App;
