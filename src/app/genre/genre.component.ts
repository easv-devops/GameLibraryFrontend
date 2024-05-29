import {Component, OnInit} from '@angular/core';
import {GenreService} from "../services/genre.service";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrl: './genre.component.css'
})
export class GenreComponent implements OnInit{
  data: any;

  constructor(private service: GenreService) {
  }
  ngOnInit(): void {
    this.service.getGenres().subscribe(data => this.data = data);
  }


}
