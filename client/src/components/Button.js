import React from "react";
import "./Button.css";
export function Button() {
  return (
    <>
      <button className="btn">Search</button>
      <input className="ct" type="text" id="Catgoreis" name="Catgoreis" placeholder="Catgoreis" />
    </>
  );
}