import {Component, OnInit} from '@angular/core';
import {GameService} from "../services/game.service";
import {GameModel} from "./game.Model";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit{
  data: any;
  constructor(private service: GameService) {
  }
  ngOnInit(): void {
    this.service.getGames().subscribe(data => this.data = data);
  }

  addGame(addGameForm: any): void{
    let game = new GameModel();
    game.gameTitle = addGameForm.value.gameTitleInput;
    game.consoleId = addGameForm.value.consoleIdInput;
    game.genreId = addGameForm.value.genreIdInput;


    this.service.addGame(game).subscribe((response) => {console.log(response);this.ngOnInit()})
  }

}
