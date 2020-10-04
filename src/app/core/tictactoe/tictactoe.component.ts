import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent implements OnInit {

  isXPlayer: Boolean = true
  gameStatus: String = "playing"
  boardGame: String[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  showMe(event) {
    // Update boardGame
    let target = event.target.id
    let boardCell = this.boardGame[target[0]][target[1]]

    if (boardCell == '') {
      this.boardGame[target[0]][target[1]] = this.isXPlayer ? "X" : "O"
      this.isXPlayer = !this.isXPlayer
    }

  }

}
