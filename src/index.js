import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// app wroks offline user needs to change it from unregistered() to registered()
serviceWorker.unregister();