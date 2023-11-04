import "./Card.css";
import React from "react";

export default function Card({ color = "#DD2D4A", titulo, children }) {
  const cardStyle = {
    backgroundColor: color,
    borderColor: color,
  };
  return (
    <div className="Card" style={cardStyle}>
      <div className="Title">{titulo}</div>
      <div className="Content">{children}</div>
    </div>
  );
}
