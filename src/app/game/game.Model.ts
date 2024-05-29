import {Guid} from "guid-typescript";

export class GameModel {
  id: string = Guid.create().toString();
  title: string = "";
  consoleId: string = "";
  genreId: string = "";
}
