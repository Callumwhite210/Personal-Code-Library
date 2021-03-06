import React from "react";
import { Card } from "react-bootstrap";
import "./style.css";

export function List({ children }) {
  return (
    <div className="list-overflow-container justify-content-center">
      <Card className="list-group">{children}</Card>
    </div>
  );
}

export function ListItem({ children }) {
  return <Card className="list-group-item">{children}</Card>;
}
