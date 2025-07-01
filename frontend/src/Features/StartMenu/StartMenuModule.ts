import { Module } from "app-leaf";
import { StartMenuController } from "./Controllers/StartMenuController.ts";

export class StartMenuModule {}
Module([StartMenuController])(StartMenuModule);
