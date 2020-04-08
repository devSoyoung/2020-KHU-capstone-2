import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainPage from "./pages/MainPage";
import EditorPage from "./pages/EditorPage/EditorPage";

import Header from "./layout/Header";

import "./App.css";

const initialState = {
  editMode: false,
  login: false,
  darkMode: false,
};

function App() {
  return (
    <Router>
      <div className={`App${initialState.darkMode ? " dark-mode" : ""}`}>
        <Header editMode={initialState.editMode} login={initialState.login} />
        <Switch>
          <Route path="/editor" component={EditorPage} />
          <Route path="/" component={MainPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
