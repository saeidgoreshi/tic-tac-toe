import { PlayerNum, StatusEnum } from "./Enums";

export class Logic {

  field: Array<Array<string>> = []
  currentTurn: string;
  status: StatusEnum;

  public constructor()
  {
    this.status = StatusEnum.START;
    this.currentTurn = PlayerNum.Player1;
  }

  async endGame(): Promise<void> { this.status = StatusEnum.STOP; }
  async startGame(): Promise<void>
  {
    this.status = StatusEnum.START;
    this.field = [["", "", ""], ["", "", ""], ["", "", ""]];
  }

  async checkGameDraw(): Promise<boolean>
  {
    let isNotFull = false;
    this.field.forEach((row, indexX) =>
    {
        if (row.includes(""))
          isNotFull = true;
    })
    
    if (!isNotFull) 
      return true;
      
    return false;
  }
  async checkGameWinner(playerNum: string): Promise<boolean>
  {
    let isPlayerWinner: boolean = false;
    
    //horizantal
    this.field.forEach((row, index) =>
    {
      if (row[0] == playerNum && row[1] == playerNum && row[2] == playerNum)
        isPlayerWinner = true;
    })

    //vertical
    for (let v = 0; v < 3; v++)
      if (this.field[0][v] == playerNum && this.field[1][v] == playerNum && this.field[2][v] == playerNum)
        isPlayerWinner = true;
    
   //Cross1
   if (this.field[0][0] == playerNum && this.field[1][1] == playerNum && this.field[2][2] == playerNum)
     isPlayerWinner = true;

    //Cross2
    if (this.field[0][2] == playerNum && this.field[1][1] == playerNum && this.field[2][0] == playerNum)
      isPlayerWinner = true;
    
    return isPlayerWinner;
  }
  
}
