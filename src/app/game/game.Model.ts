import {Guid} from "guid-typescript";

export class GameModel {
  gameId: string = Guid.create().toString();
  gameTitle: string = "";
  consoleId: string = "";
  genreId: string = "";
}
