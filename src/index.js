import React from "react";
import "./index.css";
import App from "./App";

import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./context/StateProvider";
import { initialState } from "./context/initialState";
import reducer  from "./context/reducer";
const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <Router>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </Router>
);
