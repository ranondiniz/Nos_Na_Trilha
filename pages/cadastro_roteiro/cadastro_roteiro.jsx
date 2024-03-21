import React from "react";
import { AdicionarRoteiro } from "./AdicionarRoteiro";
import "./style.css";

export const CadastroDoRoteiro = () => {
  return (
    <div className="CADASTRO-DO-ROTEIRO">
      <div className="div">
        <div className="overlap">
          <div className="group">
            <div className="overlap-group">
              <p className="p">Entre em contato para mais informações</p>
              <p className="p">Entre em contato para mais informações</p>
              <p className="p">Entre em contato para mais informações</p>
              <p className="p">Entre em contato para mais informações</p>
            </div>
            <p className="rua-das-colhetas">
              Rua das Colhetas, 258-A, Apipucos
              <br />
              Recife, PE - Brasil
              <br />
              CEP: 10254-330
            </p>
            <div className="facebook-wrapper">
              <img className="img" alt="Facebook" src="image.png" />
            </div>
            <div className="whatsapp-wrapper">
              <img className="img" alt="Whatsapp" src="whatsapp-1-2.png" />
            </div>
            <div className="twitter-wrapper">
              <img className="img" alt="Twitter" src="twitter-1-2.png" />
            </div>
            <div className="youtube-wrapper">
              <img className="img" alt="Youtube" src="youtube-1-2.png" />
            </div>
            <div className="instagram-wrapper">
              <img className="img" alt="Instagram" src="instagram-1-2.png" />
            </div>
            <div className="logotipo-do-wrapper">
              <img className="img" alt="Logotipo do" src="logotipo-do-pinterest-1-2.png" />
            </div>
            <p className="n-s-NA-TRILHA">
              NÓS NA TRILHA PASSEIOS LTDA <br />
              08.591.212/0004-07
            </p>
            <div className="overlap-2">
              <div className="text-wrapper-2">Encontre-nos nas redes sociais</div>
              <div className="text-wrapper-2">Encontre-nos nas redes sociais</div>
            </div>
            <div className="text-wrapper-3">contato@nosnatrilha.com.br</div>
          </div>
        </div>
        <div className="overlap-3">
          <div className="text-wrapper-4">Descrição:</div>
          <img className="rectangle" alt="Rectangle" src="rectangle-105.png" />
          <div className="text-wrapper-5">Imagem</div>
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="rectangle-4" />
          <div className="rectangle-5" />
          <div className="text-wrapper-6">Nome:</div>
          <div className="text-wrapper-7">Quantidade de vagas:</div>
          <div className="text-wrapper-8">Horário de saída:</div>
          <div className="text-wrapper-9">Transporte:</div>
          <div className="text-wrapper-10">Atrações e Atividades:</div>
          <div className="overlap-4">
            <p className="requisitos-de-viagem">
              <span className="span">
                <br />
              </span>
              <span className="text-wrapper-11">Requisitos de Viagem e Documentação:</span>
            </p>
            <div className="rectangle-6" />
          </div>
          <div className="text-wrapper-12">Alojamento:</div>
          <div className="rectangle-7" />
          <div className="rectangle-8" />
          <div className="rectangle-9" />
          <div className="text-wrapper-13">Preço unitário:</div>
          <div className="overlap-5">
            <div className="rectangle-10" />
            <div className="text-wrapper-14">R$</div>
          </div>
          <div className="group-wrapper">
            <div className="group-2">
              <div className="ellipse" />
              <div className="text-wrapper-15">Escalada</div>
              <div className="overlap-6">
                <div className="text-wrapper-16">Trilha</div>
                <div className="text-wrapper-16">Trilha</div>
              </div>
              <div className="ellipse-2" />
              <div className="text-wrapper-17">Praia</div>
              <div className="ellipse-wrapper">
                <div className="ellipse-3" />
              </div>
              <div className="text-wrapper-18">Ponto Turístico</div>
              <div className="ellipse-4" />
              <div className="text-wrapper-19">Cachoeira</div>
              <div className="text-wrapper-20">Rio</div>
              <div className="text-wrapper-21">Sítio Arqueológico</div>
              <div className="ellipse-5" />
              <div className="ellipse-6" />
              <div className="ellipse-7" />
              <div className="text-wrapper-22">Selecione uma categoria:</div>
            </div>
          </div>
          <AdicionarRoteiro className="adicionar-roteiro-instance" />
          <div className="input-field">
            <div className="input">
              <div className="overlap-group-2">
                <div className="input-autolayout">
                  <div className="input-text">01/01/2024</div>
                </div>
                <div className="label">Data de início:</div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-7">
          <div className="overlap-wrapper">
            <div className="overlap-8">
              <div className="rectangle-11" />
              <img className="icon-cart" alt="Icon cart" src="icon-cart.png" />
              <img className="icon-bell" alt="Icon bell" src="icon-bell.png" />
              <img className="icon-person" alt="Icon person" src="icon-person.png" />
              <div className="group-3">
                <div className="text-wrapper-23">HOME</div>
                <div className="text-wrapper-24">ROTEIROS</div>
                <div className="text-wrapper-25">CONTATO</div>
                <div className="text-wrapper-26">FEED</div>
                <div className="text-wrapper-27">NOSSA HISTÓRIA</div>
              </div>
              <img className="rectangle-12" alt="Rectangle" src="rectangle-197.png" />
              <img className="lupa" alt="Lupa" src="lupa-4-3.png" />
              <div className="text-wrapper-28">Cadastre-se</div>
              <div className="text-wrapper-29">Login</div>
              <div className="text-wrapper-30">Parcerias</div>
              <div className="text-wrapper-31">Central de Colaboradores</div>
              <img className="bcaf" alt="Bcaf" src="ca7cc0c4-bcaf-4b4c-86f3-a7f01eba79c6-1.png" />
            </div>
          </div>
          <p className="home-central-do">
            <span className="text-wrapper-32">Home | Central do Colaborador | Perfil do Colaborador | </span>
            <span className="text-wrapper-33">Cadastro do Roteiro</span>
          </p>
        </div>
      </div>
    </div>
  );
};
