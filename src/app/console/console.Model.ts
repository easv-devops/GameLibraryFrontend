import {Guid} from "guid-typescript";
export class ConsoleModel {
  consoleId: string = Guid.create().toString();
  consoleName: string = "";
}
