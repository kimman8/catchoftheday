import React from "react";
import { render } from "react-dom";
import "./css/style.css";
import Router from "./components/Router";
import StorePicker from "./components/StorePicker";
render(<StorePicker />, document.querySelector("#main"));
