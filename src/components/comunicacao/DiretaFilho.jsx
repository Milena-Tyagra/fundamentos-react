import React from "react";

export default function DiretaFilho({ nome, idade, nerd }) {
  return (
    <div>
      <span>{`${nome} tem `}</span>
      <strong>{idade}</strong>
      <span>{` anos e ${nerd ? "é" : "não é"} um nerd`}</span>!
    </div>
  );
}
