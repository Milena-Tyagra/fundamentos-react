import "./Input.css";
import React, { useState } from "react";

export default function Input() {
  const [valor, setValor] = useState("Inicial");
  const style = {
    display: "flex",
    flexDirection: "column",
  };

  const styleInput = {
    display: "flex",
    justifyContent: "space-between",
  };

  function quandoMudar(e) {
    console.log(e);
    setValor(e.target.value);
  }
  return (
    <div className="Input">
      <h2>{valor.length ? valor : "Aguardando valor..."}</h2>
      <div style={style}>
        <div style={styleInput}>
          <span>Com state</span>
          <input value={valor} onChange={quandoMudar} />
        </div>

        <div style={styleInput}>
          <span>Modo Leitura</span>
          <input value={valor} readOnly />
        </div>

        <div style={styleInput}>
          <span>Sem state</span>
          <input value={undefined} />
        </div>
      </div>
    </div>
  );
}
