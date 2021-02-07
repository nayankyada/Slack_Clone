import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./Context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ContextProvider>,
  rootElement
);
