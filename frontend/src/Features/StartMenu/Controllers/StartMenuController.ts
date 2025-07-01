import { Controller, OnStart } from "app-leaf";
import { GreetService } from "../../../../bindings/changeme/index.ts";

export class StartMenuController {
  constructor() {}
  protected Start() {}
  public async Greet(name: string): Promise<string> {
    return GreetService.Greet(name);
  }
}

//vite doesnt support decorators in .tsx files, so we need to use the Controller and OnStart decorators manually
Controller()(StartMenuController);
OnStart()(StartMenuController.prototype, "Start", {});
