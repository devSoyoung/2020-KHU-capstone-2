import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainPage from "./pages/MainPage";
import EditorPage from "./pages/EditorPage/EditorPage";

import Header from "./layout/Header";

import "./App.css";

const initialState = {
  editMode: false,
  login: false
};

function App() {
  return (
    <Router>
      <Header editMode={initialState.editMode} login={initialState.login} />
      <Switch>
        <Route path="/editor" component={EditorPage} />
        <Route path="/" component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
