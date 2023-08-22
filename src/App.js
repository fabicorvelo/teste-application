import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <section id="Home">
        <div>
          <div class="topnav" id="myTopnav">
            <a href="#Home" class="active">
              Home
            </a>
            <a href="#Game">Game</a>
            <a href="#Developers">Developers</a>
          </div>
          <img
            class="banner"
            src="https://www.triscele.com.br/wp-content/uploads/2017/01/desenvolvimento-web.jpg"
            alt="Imagem Banner"
          />
        </div>
      </section>
      <p></p>
      <section id="Game">
        <div align="center">
          <p></p>
          <h3>Iframes in React</h3>
          <p></p>
          <div class="row">
            <div class="col-sm-7">
              <iframe  src="https://studio.code.org/projects/applab/vkdlz2qn4_gmrSh9KFUcHA4DWqb09Xw6UKQNMm4k0XM/embed"></iframe>
            </div>
            <div class="blackbox"></div>
            <div class="col-sm-5">
              <span>
                <strong>Descrição:</strong>
                <p>
                  Este aplicativo é uma versão digitalmente adaptada de um
                  popular jogo conhecido como "Pedra, Papel e Tesoura". Ele foi
                  desenvolvido utilizando a plataforma code.org pela empresa
                  Byjus Future School, que é uma escola de programação voltada
                  para jovens e crianças de todo o mundo. No projeto React, é
                  incorporado um link em um Iframe gerado pelo code.org,
                  permitindo o acesso ao jogo diretamente dentro da página
                  React.
                </p>
                <p>
                  <strong>Siga estes passos:</strong>
                </p>
                <ul>
                  Toque ou clique para executar. Se não carregar o jogo tente
                  executar em outro navegador. Escolha pedra, papel ou tesoura.
                  Boa Sorte!
                </ul>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="Developers">
        <div class="card">
          <div class="container">
            <div class="row">
              <div class="col-sm">
                <img
                  class="profile"
                  src="https://suap.ifsp.edu.br/media/alunos/252992.ay26NMNJ7Onz.jpg"
                  alt="Imagem Fabiane"
                />
                <h3>Fabiane</h3>
              </div>
              <div class="col-sm">
                <img
                  class="profile"
                  src="https://suap.ifsp.edu.br/media/alunos/253012.VavcelzA35l4.jpg"
                  alt="Imagem Gabriel"
                />
                <h3>Gabriel</h3>
              </div>
              <div class="col-sm">
                <img
                  class="profile"
                  src="https://suap.ifsp.edu.br/media/alunos/253119.3zN7HMEhNBla.jpg"
                  alt="Imagem José"
                />
                <h3>José</h3>
              </div>
              <div class="col-sm">
                <img
                  class="profile"
                  src="https://suap.ifsp.edu.br/media/alunos/252858.vyZj8aCBEwPi.jpeg"
                  alt="Imagem Higor"
                />
                <h3>Higor</h3>
              </div>
            </div>
          </div>
        </div>
        <p></p>
      </section>
    </div>
  );
}

export default App;
