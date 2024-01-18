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
          <h2 className="lineProduct">Votre routine haircaire est :</h2>
          <img className="products" src={initialProduct1} alt="" />
          <p className="titleProduct">Nom du produit 1</p>
          <img className="products" src={initialProduct2} alt="" />
          <p className="titleProduct">Nom du produit 2</p>
          <img className="products" src={initialProduct3} alt="" />
          <p className="titleProduct">Nom du produit 3</p>
        </div>
        <div id="arrow">
          <img id="arrow1" className="arrows products" src={arrow} alt="" />
          <img className="arrows products" id="arrow2" src={arrow} alt="" />
          <img className="arrows products" id="arrow3" src={arrow} alt="" />
        </div>
        <div className="productLine">
          <h2 className="lineProduct">Votre routine haircaire est :</h2>
          <img className="products" src={greenProduct1} alt="" />
          <p className="titleProduct">Nom du produit 1</p>
          <img className="products" src={greenProduct2} alt="" />
          <p className="titleProduct">Nom du produit 2</p>
          <img className="products" src={greenProduct3} alt="" />
          <p className="titleProduct">Nom du produit 3</p>
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
          Nom du produit
        </p>
        <button className="buttonMainPage" type="button">
          Participez et commandez
        </button>
      </div>
    </div>
  );
}

export default Product;
