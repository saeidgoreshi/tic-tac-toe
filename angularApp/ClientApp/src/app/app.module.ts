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


import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';

import { MatSelectModule } from '@angular/material/select';
import { environment } from '../environments/environment';

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
    ApolloModule,
    MatSelectModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      
      { path: 'tic-tac-toe', component: TicTacToeComponent },
      
    ])
  ],
  providers: [

    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: `${environment.baseUrl}/graphql/`,
          }),
        };
      },
      deps: [HttpLink],
    }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
