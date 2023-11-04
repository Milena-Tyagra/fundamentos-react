import React from "react";
import alunos from "../../data/alunos";

export default function ListaAlunos() {
  const listaAlunos = alunos.map((aluno) => {
    return (
      <li key={aluno.id}>
        {aluno.id}. {aluno.nome} - {aluno.nota}
      </li>
    );
  });
  const style = {
    listStyle: "none",
    margin: "0px",
  };
  return (
    <div>
      <ul style={style}>{listaAlunos}</ul>
    </div>
  );
}
