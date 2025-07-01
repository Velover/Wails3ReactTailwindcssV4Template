import { AppLeaf } from "app-leaf";
import "./main.css";
import { UIModule } from "./Features/UI/UIModule.ts";
import { StartMenuModule } from "./Features/StartMenu/StartMenuModule.ts";

AppLeaf.LoadModules([UIModule, StartMenuModule]);
AppLeaf.Start();
