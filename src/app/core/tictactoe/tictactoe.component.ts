import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent implements OnInit {

  currentPlayer: String = "X"
  gameStatus: String = "playing"
  boardGame: String[] = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
