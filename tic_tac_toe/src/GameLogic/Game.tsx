import React, { useCallback, useState } from "react";
import Board from "./Board";
import { calculateWinner } from "./Helper";
import { ESquareValue } from "./Square";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setIsNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? ESquareValue.X : ESquareValue.O;

  const handleClick = (i: number) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = JSON.parse(JSON.stringify(current));

    if (winner || squares[i]) return;

    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setIsNext(!xIsNext);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setIsNext(step % 2 === 0);
  };

  const renderMoves = (): JSX.Element[] =>
    history.map((_step, move) => {
      const destination = move ? `Go to move # ${move}` : "Go to Start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });


  return (
    <>
      <h1>React Tic Tac Toe - With Hooks</h1>
      <Board squares={history[stepNumber]} onClickEvent={handleClick} />
      <div className="info-wrapper">
        <div className="">
          <h3>History </h3>
          {renderMoves()}
        </div>
        <h3>{winner ? "Winner is " + winner : "Next Player" + xO}</h3>
      </div>
    </>
  );
};

export default Game;
