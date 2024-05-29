import {Guid} from "guid-typescript";
export class ConsoleModel {
  id: string = Guid.create().toString();
  name: string = "";
}
