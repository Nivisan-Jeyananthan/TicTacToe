import React from "react";

interface IProps {
  value: ESquareValue;
  onClickEvent: () => void;
}

export enum ESquareValue {
  NS = "NS",
  X = "X",
  O = "O",
}

const Square = ({ value = ESquareValue.NS, onClickEvent }: IProps) => {
  const style: string =
    value === ESquareValue.NS ? `squares ${value}` : `squares`;

  return (
    <button className={style} onClick={onClickEvent}>
      {value}
    </button>
  );
};

export default React.memo(Square);
