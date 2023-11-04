import React from "react";

export default function Aleatorio({ max, min }) {
  const random = parseInt(Math.random() * (max - min)) + min;
  return (
    <div>
      <p>
        O número aleatório gerado entre {min} e {max} é:
        <strong> {random}</strong>
      </p>
    </div>
  );
}
