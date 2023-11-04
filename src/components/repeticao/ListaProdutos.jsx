import React from "react";
import produtos from "../../data/produtos";

export default function ListaProdutos() {
  const listaProdutos = produtos.map((produto) => {
    return (
      <tr key={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>R${produto.valor.toFixed(2)}</td>
      </tr>
    );
  });
  return (
    <div>
      <table border="1">
        <thead>
          <td>ID</td>
          <td>NOME</td>
          <td>VALOR</td>
        </thead>
        <tbody>{listaProdutos}</tbody>
      </table>
    </div>
  );
}
