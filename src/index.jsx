//@flow
import React from "react";
import ReactDOM from "react-dom";
import Checkboxes from "./checkboxes.jsx";

const appContainer = document.getElementById("app-container");
if (appContainer) {
    ReactDOM.render(<Checkboxes numberOfCheckboxes={4} />, appContainer);
}
