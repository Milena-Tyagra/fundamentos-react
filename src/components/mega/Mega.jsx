import React, { useState } from "react";

export default function Mega() {
  const [numerosGerados, setNumeros] = useState([]);
  const [qtdNumeros, setQtdNumero] = useState(0);
  function quandoMudar(e) {
    setQtdNumero(e.target.value);
    setNumeros([]);
  }
  function gerarNumeros() {
    const numerosGerados = [];
    while (numerosGerados.length < qtdNumeros) {
      const random = parseInt(Math.random() * 60);
      let jaExistente = numerosGerados.includes(random);
      if (!jaExistente) numerosGerados.push(random);
    }
    setNumeros(numerosGerados.sort((n1, n2) => n1 - n2));
    return 0;
  }
  const numeros = numerosGerados.map((numero) => {
    return <span>{numero} </span>;
  });
  return (
    <div>
      <div>
        <h3>Quantidade de numeros sorteados</h3>
        <input value={qtdNumeros} onChange={quandoMudar} />
      </div>

      {qtdNumeros && qtdNumeros > 0 && (
        <>
          <button onClick={gerarNumeros}>
            Gerar {qtdNumeros} números Aleatórios
          </button>
          <br />
          {numeros}
        </>
      )}
    </div>
  );
}
