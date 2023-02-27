import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeComponent } from './Components/home/home.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

//Ticktactoe
import { ReactiveFormsModule } from "@angular/forms";
import { TicTacToeComponent } from './Components/tic-tac-toe/tic-tac-toe.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TicTacToeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,

    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
   
    ReactiveFormsModule,//Tictactoe

    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      
      { path: 'tic-tac-toe', component: TicTacToeComponent },
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
