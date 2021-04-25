import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Service from "./components/Service";
import "./App.scss";
import "../src/style/main.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div id="content">
          <Switch>
                {/* Showcase*/}
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/service" component={Service} />
                <Route path="/contact" component={Contact} />
          </Switch>
        </div>
        <div id="warning">
            <p>Bienvenue sur le site <em>ergon.</em><br/>
            Attention ce site n&apos;est visible qu&apos;en mode paysage.<br/>
            Veuillez trourner votre écran en mode "paysage".</p>
        </div>
      </div>
    );
  }
}

export default App;