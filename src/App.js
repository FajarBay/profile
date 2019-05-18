import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";

import profile from "./pages/profile";
import Septi from "./pages/Septi";
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
          <Route path="/" component={profile} exact /> 
          <Route path="/Septi" component={Septi} exact />
          <Route path="/Rara" component={Rara} exact />
          <Route path="/Daru" component={Daru} exact />
          <Route path="/Fajar" component={Fajar} exact />
          <Route component={Error} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
