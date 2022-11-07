import React from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/store/";
import axios from "axios";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./containers/App";
import "./styles/index.css";
import * as CommonConstants from "./common/commonConstants";

axios.defaults.baseURL = CommonConstants.API_BASE_URL;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
