import React from "react";
import { Provider } from 'react-redux'
import { createRoot } from "react-dom/client"

import {store} from "@/store/index.js"

import App from "./App.jsx";
import "./styles/common.scss"
import  "./styles/demon.css"
const root = createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
