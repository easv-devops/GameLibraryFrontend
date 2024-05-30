import {Guid} from "guid-typescript";
export class GenreModel {
  genreId: string = Guid.create().toString();
  genreName: string = "";
}
