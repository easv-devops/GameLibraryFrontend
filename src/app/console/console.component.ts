import {Component, OnInit} from '@angular/core';
import {ConsoleService} from "../services/console.service";

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrl: './console.component.css'
})
export class ConsoleComponent implements OnInit{
  data: any;

  constructor(private service: ConsoleService) {
  }
  ngOnInit(): void {
    this.service.getConsoles().subscribe(data => this.data = data);
  }

}
