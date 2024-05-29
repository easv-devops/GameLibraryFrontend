import {Guid} from "guid-typescript";
export class GenreModel {
  id: string = Guid.create().toString();
  name: string = "";
}
