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
  selectedGame: any;
  selectedGameConsole: any;
  selectedGameGenre: any;

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


    this.gameService.addGame(game).subscribe((response) => {console.log(response);this.ngOnInit()});
  }

  setGames(id: string){
    this.gameService.getGamesFromConsole(id).subscribe(data => this.gameData = data);
  }

  setSelectedData(){
    this.consoleService.getConsole(this.selectedGame.consoleId)
      .subscribe(data => this.selectedGameConsole = data);
    this.genreService.getGenre(this.selectedGame.genreId).
    subscribe(data => this.selectedGameGenre = data);
  }
  showDetails(id: string) {
    this.gameService.getGame(id).subscribe(data => this.selectedGame = data);
    this.setSelectedData();

    let parentDiv = document.getElementById("gameDisplay");
    let childDiv = document.getElementById("detailContent");
    // @ts-ignore
    parentDiv.classList.add('displayDetail');
    // @ts-ignore
    parentDiv.classList.remove('noDisplay');
    // @ts-ignore
    childDiv.classList.add('detailShow');
    // @ts-ignore
    childDiv.classList.remove('detailHide');
  }

  hideDetails() {
    let parentDiv = document.getElementById("gameDisplay");
    let childDiv = document.getElementById("detailContent");
    // @ts-ignore
    parentDiv.classList.remove('displayDetail');
    // @ts-ignore
    parentDiv.classList.add('noDisplay');
    // @ts-ignore
    childDiv.classList.remove('detailShow');
    // @ts-ignore
    childDiv.classList.add('detailHide');
  }

  test() {

    let parentDiv = document.getElementById("gameDisplay");
    let childDiv = document.getElementById("detailContent");
    // @ts-ignore
    parentDiv.classList.add('displayDetail');
    // @ts-ignore
    parentDiv.classList.remove('noDisplay');
    // @ts-ignore
    childDiv.classList.add('detailShow');
    // @ts-ignore
    childDiv.classList.remove('detailHide');
  }
}
