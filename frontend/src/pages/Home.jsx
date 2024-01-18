import { useEffect, useNavigate } from "react";
import header from "../assets/header.mp4";
import loreal from "../assets/loreal.jpg";
import capillum from "../assets/capillum.webp";
import footer from "../assets/produitsLoreal.jpg";
import "./home.css";

function Home() {
  function handleClick() {
    // useNavigate("/")
  }

  return (
    <div className="home">
      <div id="header">
        <h1>L'Oréal et Capillum</h1>
        <video id="headerVideo" autoPlay muted loop>
          <source src={header} />
        </video>
      </div>
      <p className="topParagraphe">
        Pendant plus de 20 ans, nous avons pris des mesures pour réduire les
        émissions de CO2 liées à notre activité industrielle. Pour y parvenir,
        nous avons amélioré l’efficacité énergétique sur toutes nos
        installations (bâtiments, équipement, etc.) et avons augmenté le recours
        aux énergies renouvelables dès que cela était possible. Nous avons ainsi
        atteint nos objectifs sans recours à la compensation. Nous avons élaboré
        notre stratégie d’énergies renouvelables en fonction des possibilités
        offertes localement par nos sites industriels, dans les divers pays où
        nous opérons : pour la plupart de nos projets de réduction d’émissions,
        nous utilisons des énergies renouvelables produites localement, ou que
        nous produisons directement (biomasse, biométhanisation, panneaux
        solaires, etc.){" "}
      </p>
      <p className="bottomParagraphe">
        En 2017, nous étions parmi les 100 premières entreprises à nous fixer
        des objectifs validés par l’initiative Science Based Targets (SBT).
        Notre objectif global en matière de changement climatique pour 2030
        consiste à aligner nos émissions de gaz à effet de serre sur le scénario
        de + 1,5 °C, ce qui signifie que nous réduirons de 50 % par produit fini
        toutes nos émissions de gaz à effet de serre tout au long de notre
        chaîne de valeur (scopes* 1, 2 et 3), par rapport à 2016. Pour atteindre
        cet objectif, nous avons établi des objectifs chiffrés à chaque étape de
        notre chaîne de valeur, afin de couvrir non seulement nos sites de
        production et de distribution, mais aussi nos d’approvisionnements et
        les impacts associés à l’utilisation de nos produits par les
        consommateurs.
      </p>
      <div id="nous">
        <img className="nousImg" src={loreal} alt="" />
        <img className="nousImg" src={capillum} alt="" />
      </div>
      <p className="topParagraphe">
        Chaque jour, un million de Français franchissent les portes des salons
        de coiffure, laissant derrière eux une empreinte de 4000 tonnes de
        déchets capillaires par an en France. Mais la solution est entre nos
        mains avec CAPILLUM, une initiative novatrice soutenue par L'Oréal.
        Transformons ces déchets en une ressource écoresponsable, empruntant la
        voie du paillage agricole pour nourrir la terre de manière entièrement
        naturelle.
      </p>
      <p className="bottomParagraphe">
        Joignez-vous à nous aujourd'hui, participez à notre partenariat concret
        entre L'Oréal et CAPILLUM, et adoptons ensemble une routine haircare
        respectueuse de l'environnement. Ensemble, donnons une nouvelle vie à
        nos cheveux, tout en préservant notre planète 1 million de francais se
        rendent chaque jour chez le coiffeur, et génèrent 4000 tonnes de céchets
        capilaires chaque année en France. Les innovations CAPILLUM : Faire du
        cheveu la fibre de demain en créant des solutions écologiques et
        innovantes bénéfiques pour notre planète.
      </p>

      <button className="buttonMainPage" type="button" onClick={handleClick}>
        ADHERER
      </button>
      <img id="footer" src={footer} alt="" />
    </div>
  );
}

export default Home;
