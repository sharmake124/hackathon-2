import { useNavigate } from "react-router-dom";
import header from "../assets/header.mp4";
import loreal from "../assets/loreal.jpg";
import capillum from "../assets/capillum.webp";
import footer from "../assets/produitsLoreal.jpg";
import lorealLogos from "../assets/loreal-logos.png";
import logoCapillum from "../assets/logoCapillum.webp";
import "./home.css";

function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/signup");
  }

  return (
    <div className="home">
      <div id="header">
        <div id="headTitle">
          <img src={lorealLogos} alt="" id="lorealLogo" />
          <h1>et </h1>
          <img src={logoCapillum} alt="" id="lorealLogo" />
        </div>
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
        Capillum et L'Oréal partagent une vision commune de l'engagement envers
        la durabilité. Ce partenariat encourage les pratiques éco-friendly tout
        en offrant des avantages tangibles à nos clients engagés. A partir de 5
        commandes de produit écologique L’Oréal ou RDV dans un salon partenaire
        Capillum, vous pouvez bénéficier d’une réduction exclusive sur votre
        prochaine commande de produits écologique ou RDV chez un coiffeur
        Capillum. Ensemble, Capillum et L'Oréal redéfinissent les normes de
        beauté en intégrant la durabilité. Merci de vous joindre à nous dans
        cette initiative vers une beauté plus verte et consciente.
      </p>

      <button className="buttonMainPage" type="button" onClick={handleClick}>
        ADHERER
      </button>
      <img id="footer" src={footer} alt="" />
    </div>
  );
}

export default Home;
