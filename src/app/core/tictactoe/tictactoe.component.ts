import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent implements OnInit {

  isXPlayer: Boolean = true
  moves: number = 0
  gameStatus: String = "playing"
  boardGame: String[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]

  checkWinner() {
    let player = this.isXPlayer ? 'X' : 'O'
    for (let i = 0; i < this.boardGame.length; i++) {
      // verify by row
      if (
        this.boardGame[i][0] == player &&
        this.boardGame[i][1] == player &&
        this.boardGame[i][2] == player
      ) {
        return true
      }

      // verify by column
      if (
        this.boardGame[0][i] == player &&
        this.boardGame[1][i] == player &&
        this.boardGame[2][i] == player
      ) {
        return true
      }

      // verify diagonal left-right
      if (
        this.boardGame[0][0] == player &&
        this.boardGame[1][1] == player &&
        this.boardGame[2][2] == player
      ) {
        return true
      }

      // verify diagonal right-left
      if (
        this.boardGame[0][2] == player &&
        this.boardGame[1][1] == player &&
        this.boardGame[2][0] == player
      ) {
        return true
      }
    }
  }

  showMe(event: Event) {
    let target = event.target.id
    let boardCell = this.boardGame[target[0]][target[1]]

    if (boardCell == '' && this.gameStatus === 'playing') {

      this.moves += 1
      this.boardGame[target[0]][target[1]] = this.isXPlayer ? "X" : "O"

      if (this.checkWinner()) {
        // Finish the board if has a winner 
        this.gameStatus = `Player ${this.isXPlayer ? "X" : "O"}`
        document.getElementById('board').className = 'board finished'

      } else if (this.moves === 9) {
        // Finish the board if has no more moves
        this.gameStatus = 'No Winners'
        document.getElementById('board').className = 'board finished'

      } else {
        // Change the player
        this.isXPlayer = !this.isXPlayer

      }
    }

  }

  resetGame() {
    // Reset the board and the settings
    let board = this.boardGame.map(item => item.map(value => value = ''))
    this.boardGame = board
    this.isXPlayer = true
    this.moves = 0
    this.gameStatus = 'playing'
    document.getElementById('board').className = 'board'
  }

}
