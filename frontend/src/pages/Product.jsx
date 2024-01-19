import greenProduct1 from "../assets/green-product-1.png";
import greenProduct2 from "../assets/green-product-2.png";
import greenProduct3 from "../assets/green-product-3.png";
import initialProduct1 from "../assets/initial-product-1.jpg";
import initialProduct2 from "../assets/initial-product-2.jpg";
import initialProduct3 from "../assets/initial-product-3.jpg";
import venteComplementaire from "../assets/vente-complementaire.jpg";
import arrow from "../assets/arrow.svg";
import "./product.css";

function Product() {
  return (
    <div id="productPage">
      <h1 id="titleProductPage">Bonjour Crystal</h1>
      <div id="productAlternative">
        <div className="productLine">
          <h2 className="lineProduct">
            Votre ancienne routine haircaire est :
          </h2>
          <img className="products" src={initialProduct1} alt="" />
          <p className="titleProduct">Allow Police</p>
          <img className="products" src={initialProduct2} alt="" />
          <p className="titleProduct">According Government</p>
          <img className="products" src={initialProduct3} alt="" />
          <p className="titleProduct">Gun Born</p>
        </div>
        <div id="arrow">
          <img id="arrow1" className="arrows products" src={arrow} alt="" />
          <img className="arrows products" id="arrow2" src={arrow} alt="" />
          <img className="arrows products" id="arrow3" src={arrow} alt="" />
        </div>
        <div className="productLine">
          <h2 className="lineProduct">
            Votre nouvelle routine haircaire green est :
          </h2>
          <img className="products" src={greenProduct1} alt="" />
          <p className="titleProduct">Mission Family</p>
          <img className="products" src={greenProduct2} alt="" />
          <p className="titleProduct">Herself Month</p>
          <img className="products" src={greenProduct3} alt="" />
          <p className="titleProduct">Drop Low</p>
        </div>
      </div>
      <div id="venteComplementaire">
        <h2 id="titleVenteComplementaire">
          D’après ce que vous nous avez dit, Crystal, vous pourriez aussi aimer{" "}
        </h2>
        <img
          className="products"
          id="imgVenteComplementaire"
          src={venteComplementaire}
          alt=""
        />
        <p className="titleProduct" id="descriptionVenteComplementaire">
          Feeling East
        </p>
        <div id="button">
          <button className="buttonMainPage" type="button">
            <a href="https://www.loreal-paris.fr/?&wiz_medium=cpc&wiz_source=google&wiz_campaign=oap_goog_ao_othr__bran_search_text_eg_fr__roas&gad_source=1&gclid=Cj0KCQiAtaOtBhCwARIsAN_x-3KsbQaIZ4IPQLJCCjiSMQt8b9XFNgSrkDZoN0HUp9l47drkr3qTCmYaAhA7EALw_wcB&gclsrc=aw.ds">
              Commandez
            </a>
          </button>
          <button className="buttonMainPage" type="button">
            <a href="https://www.capillum.fr/capimap">Salons de coiffure</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
