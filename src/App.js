import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import PageSearchResult from "./page-search-result";
import PageHome from "./page-home.js";
import PageArtist from "./page-artist.js";
import Layout from "./components/layout.js";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/busqueda" component={PageSearchResult} />
          <Route exact path="/artista" component={PageArtist} />
          <Route exact path="/" component={PageHome} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
