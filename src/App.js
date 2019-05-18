import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./pages/Home";
import Rara from "./pages/Rara";
import Daru from "./pages/Daru";
import Fajar from "./pages/Fajar";
import Error from "./pages/Error";
import Navbar from "./pages/Navbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Rara" component={Rara} />
          <Route path="/Daru" component={Daru} />
          <Route path="/Fajar" component={Fajar} />
          <Route component={Error} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
