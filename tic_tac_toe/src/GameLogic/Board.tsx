import React from "react";
import Square from "./Square";

interface IBoardProps {
  squares: Array<any>;
  onClickEvent: (i: number) => void;
}

const Board = ({ squares, onClickEvent }: IBoardProps) => {
  return (
    <div className="board">
      {squares.map((square, i) => (
        <Square key={i} value={square} onClickEvent={() => onClickEvent(i)} />
      ))}
    </div>
  );
};

export default Board;
