import React, { useState } from 'react';
import Boarde from '../Boarde/Boarde';
import './Game.css';
import {calcuteWinner} from '../helper';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlayer, setXPlayer] = useState(true);
  const winner = calcuteWinner(board);

  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index] ) {
      return
    }
    boardCopy[index] = xPlayer ? 'X' : 'O';
    setBoard(boardCopy);
    setXPlayer(!xPlayer);
  }

  const startNewGame = () => {
    return (
      <button className='startBtn' onClick={() => setBoard(Array(9).fill(null))}>Очистить поле</button>
    )
  }

  return (
    <div className='wrapper'>
      { startNewGame() }
      <Boarde squares={board} click={handleClick}/>
      <p className='game-info'>
        {
          winner ? 'Winner ' + winner: 'Сейчас ходит' + " " + (xPlayer ? 'X' : 'O')
        }
      </p>
    </div>
  );
};

export default Game;
