import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";

import {RouterModule} from "@angular/router";

import {AppRoutingModule, routes} from "./app.routes";
import {GameComponent} from "./game/game.component";
import {ConsoleComponent} from "./console/console.component";
import {GenreComponent} from "./genre/genre.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButton} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ConsoleComponent,
    GenreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    MatCardModule,
    MatButton,
  ],
  providers: [
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
