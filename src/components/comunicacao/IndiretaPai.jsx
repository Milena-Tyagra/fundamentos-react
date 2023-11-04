import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";
import DiretaFilho from "./DiretaFilho";

export default function IndiretaPai() {
  const [nome, setNome] = useState(null);
  const [idade, setIdade] = useState(0);
  const [nerd, setNerd] = useState(false);
  // nome idade nerd
  function fornecerInformacoes(nome, idade, nerd) {
    setNome(nome);
    setIdade(idade);
    setNerd(nerd);
  }
  return (
    <div>
      {nome && <DiretaFilho nome={nome} idade={idade} nerd={nerd} />}
      <IndiretaFilho quandoClicar={fornecerInformacoes} />
    </div>
  );
}
