import { Controller, OnStart } from "app-leaf";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "../UI/App.tsx";

export class UIController {
  protected Start() {
    ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}

//vite doesnt support decorators in .tsx files, so we need to use the Controller and OnStart decorators manually
Controller()(UIController);
OnStart()(UIController.prototype, "Start", {});
