import React from "react";
import "../footer/footerStyle.css";

export default function Footer() {
  return (
    <footer>
      <div className="att">
      <ul className="tudo">
        <li className="linha1">
          <p>
            Meta  Sobre  Blog  Carreiras  Ajuda  API  Privacidade  Termos  Principais
            Contas  Hashtags  Localizações  Instaclone Lite
          </p>
        </li>
        <li className="linha2">
          <p>Dança Comida e bebida  Casa e Jardim Música Artes visuais</p>
        </li>
        <li className="linha3">
          <p>Português(Brasil) ©2022 Instaclone from Senai</p>
        </li>
      </ul>
      </div>
    </footer>
  );
}
