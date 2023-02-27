import { Component, OnInit } from '@angular/core';
import { Logic } from './logic';
import { PlayerNum,   StatusEnum } from './Enums';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css'],
  providers: [Logic]
})
export class TicTacToeComponent implements OnInit {

  constructor(public game: Logic) { }
 
  ngOnInit(): void {
  }

  startGame(): void
  {
    this.game.startGame();
    this.changeTurnTo(PlayerNum.Player1);  
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
