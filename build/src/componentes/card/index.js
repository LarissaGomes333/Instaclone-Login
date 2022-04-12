import React from "react";
import "../card/cardStyle.css";
// import { Button } from 'reactstrap';
import Face from "../imagens/face.png";
import Logo from "../imagens/Logo.png";
import Celular from "../imagens/Celular.png";
import Imagem1 from "../imagens/imagem1.png";
import Imagem2 from "../imagens/imagem2.png";
import Imagem3 from "../imagens/imagem3.png";
import Imagem4 from "../imagens/imagem4.png";


//-L: Caso seja necessario colocar mais informações adicione mais uma categoria
//no homePage na area dos cards e aqui tbm.
function Card() {
  return (
    <div className="card">
      <div className="position">
        <p className="img-container">
          <img src={Logo} alt="" />
        </p>
        <input
          className="email"
          placeholder="Telefone, nome de usuário ou email"
        />
        <input className="senha" placeholder="Senha" />
        <button className="botao">Entrar</button>

        <p className="card-container-separacao">
          <span>OU</span>
        </p>

        <p className="info">
          <img src={Face} className="face-container" alt="" />
          Entrar com o Facebook
        </p>
        <p className="info2">Esqueceu a senha?</p>
      </div>
      <div className="cel">
        <img src={Celular} alt="" />
        <div className="imagens">
          <img src={Imagem1} className="foto" alt="" />
          <img src={Imagem2} className="foto" alt="" />
          <img src={Imagem3} className="foto" alt="" />
          <img src={Imagem4} className="foto" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Card;
