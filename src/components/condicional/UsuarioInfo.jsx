import React from "react";

export default function UsuarioInfo({ usuario }) {
  return (
    <div>
      {usuario ? (
        <span>
          Seja bem vindo <strong>{usuario.nome}</strong>!
        </span>
      ) : (
        <span>
          Seja bem vindo <strong>Amigão</strong>!
        </span>
      )}
    </div>
  );
}
