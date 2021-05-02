import React from 'react';
import './style.css'
import SocialMedia from './components/SocialMedia'
import Links from './components/Links'

import profile from './assets/profile.svg'

function App() {
  return (
    <div className="App">
       <main>
          <div className="profile">
            <img src={profile} alt="Foto de Perfil" />
            <span className="nome">Caynan Alves</span>
            <span className="subtitulo">Front-end developer</span>
            <span className="acompanhe">Acompanhe meu trabalho ✌🏼</span>
          </div>
          <section className="container">
            <SocialMedia />
            <Links />
          </section>
        </main>
    </div>
  );
}
export default App;


