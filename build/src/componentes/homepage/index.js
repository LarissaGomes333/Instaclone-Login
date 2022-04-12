import React from "react";
import "../homepage/homeStyle.css";
import Card from "../card";
import Card2 from "../card2";
// import Telefone from "../telefone/index";


function Homepage() {
  //aqui os atributos do card são adicionados e cada um desse esta chamando um diferente
  return (
    <div className="home">
      <Card />
      <Card2 />
    </div>
  );
}

export default Homepage;
