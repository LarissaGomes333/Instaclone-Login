import React from 'react';
import '../card2/card2Style.css'

import App from "../imagens/appstore.png"

function Card2() {
    return (
        <div className='card-container'>
            <div className='card2'>
                <p className="texto">Não tem uma conta?<span>Cadastre-se</span></p>
            </div>

            <div className="app-container">
                <p>Obtenha o aplicativo.</p>
                <img src={App} alt='' />
            </div>
        </div>
    );
}
export default Card2;
