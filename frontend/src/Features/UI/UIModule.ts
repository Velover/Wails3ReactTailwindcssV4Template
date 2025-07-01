import { Module } from "app-leaf";
import { UIController } from "./Controllers/UIController.tsx";

export class UIModule {}
Module([UIController])(UIModule);
