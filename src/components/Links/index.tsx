import React from 'react';
import centralmotos from '../../assets/centralmotos.png'

function Links() {
    return (
     <div className="links">
        <span>Últimos Projetos 👇🏼</span>
        <a href="https://caynanr.github.io/centralmotos/"><img src={centralmotos} alt="Site da Central Motos" /></a>
        <a href="https://caynanr.github.io/portfolio/" className="btn">⭐️ Portfólio</a>
        <a href="https://flexboxfroggy.com/"> 🤙🏼 Outro link maneiro</a>
      </div>
    )
}

export default Links