import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GenreService} from "./services/genre.service";
import {ConsoleService} from "./services/console.service";
import {GameService} from "./services/game.service";
import {GameModel} from "./game/game.Model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'GameLibraryFrontend';
  gameData: any;
  consoleData: any;
  genreData: any;

  constructor(private genreService: GenreService,
              private consoleService: ConsoleService,
              private gameService: GameService) {
  }

  ngOnInit(): void {
    this.genreService.getGenres().subscribe(data => this.genreData = data);
    this.consoleService.getConsoles().subscribe(data => this.consoleData = data);
    this.gameService.getGames().subscribe(data => this.gameData = data);
  }

  addGame(addGameForm: any): void{
    let game = new GameModel();
    game.title = addGameForm.value.gameTitleInput;
    game.consoleId = addGameForm.value.consoleIdInput;
    game.genreId = addGameForm.value.genreIdInput;


    this.gameService.addGame(game).subscribe((response) => {console.log(response);this.ngOnInit()})
  }
}
