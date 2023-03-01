import { Component, OnInit } from '@angular/core';
import { Logic } from './logic';
import { PlayerNum,   StatusEnum } from './Enums';

import { gql } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css'],
  providers: [Logic]
})
export class TicTacToeComponent implements OnInit {

  playBoard: any[] = [];
  isLoading = true;
  isError: any;

  constructor(public game: Logic, private apollo: Apollo) { }
 
  ngOnInit(): void {
    this.loadArchivedList();
  }
  loadArchivedList(): void
  {
    
    this.apollo
      .watchQuery({
        
        query: gql` {ticTacToes {  id playBoard } } `,
      })
      .valueChanges.subscribe((result: any) => {
        this.playBoard = result?.data?.ticTacToes;
        this.isLoading = result.loading;
        this.isError = result.error;
      });

  }
  loadArchivedBoard(event : any): void
  {
    let flatBoard = event.value.split(',');
    let playBoard = [["", "", ""], ["", "", ""], ["", "", ""]];
    for (let x = 0; x < playBoard.length; x++)
      for (let y = 0; y < playBoard.length; y++)
        playBoard[x][y] = flatBoard[x * 3 + y]

    this.game.field = playBoard;
    this.game.status = StatusEnum.Archived;

    console.log(flatBoard);
    console.log(playBoard);
  }
  onArchivedChange(event: any): void {
    console.log(event);
    this.loadArchivedBoard(event);
    
  }
  startGame(): void
  {
    this.game.startGame();
    this.changeTurnTo(PlayerNum.Player1);
  }
  saveGame(): void
  {
    const _POST = gql`
    mutation archiveTicTacToe($playBoard: String!) {
      archiveTicTacToe(playBoard: $playBoard) {
       id
          playBoard
      }
    }
  `;
   
    this.apollo
      .mutate({
        mutation: _POST,
        variables: {
          playBoard: this.game.field.toString(),
        },
      }).subscribe(
        ({ data }) => {
          this.loadArchivedList();
          console.log('got data', data);
        },
        error => {
          console.log('there was an error sending the query', error);
        },
    );

    
  }

  changeTurnTo(turn: PlayerNum): void
  {
    this.game.currentTurn = turn;
    const Player = 'Current Player :' + (this.game.currentTurn );
    let info: Element | null = document.body.querySelector('.currentStatus');
    info!.innerHTML = Player;
  }

  async onclick(x:number,y:number):Promise<void> {
    
    if (this.game.status == StatusEnum.STOP)
      return;

    if (this.game.field[x][y] === "") {
      if (this.game.currentTurn === PlayerNum.Player1)
      {
        this.game.field[x][y] = PlayerNum.Player1.toString();
        this.changeTurnTo(PlayerNum.Player2);
        
      }
      else {

        this.game.field[x][y] = PlayerNum.Player2.toString();
        this.changeTurnTo(PlayerNum.Player1);
        
      }

      let info: Element | null = document.body.querySelector('.currentStatus');
      await this.game.checkGameWinner(PlayerNum.Player1.toString()).then((result: Boolean) =>
      {
        if (result) {
          info!.innerHTML = `Player ${PlayerNum.Player1.toString() } Win!`;
          this.game.endGame();
        }
          
      });

      await this.game.checkGameWinner(PlayerNum.Player2.toString()).then((result: Boolean) => {
        if (result) {
          info!.innerHTML = `Player ${PlayerNum.Player2.toString()} Win!`;
          this.game.endGame();
        }
          
      });

      await this.game.checkGameDraw().then((result: boolean) =>
      {
        if (result) {
          info!.innerHTML = "No Winner!";
          this.game.endGame();
        }
          
      });
    }
  }
}
