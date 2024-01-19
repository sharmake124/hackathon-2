import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ChoiceForm.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import StraightHair from "../assets/cheveuxlisses.png";
import WavyHair from "../assets/cheveuxondules.png";
import useProductContext from "./context";

function ChoiceForm() {
  const [hair, setHair] = useState(null);
  const [color, setColor] = useState(null);
  const [shape, setShape] = useState(null);
  const [type, setType] = useState(null);
  const { setProduct } = useProductContext();
  const navigate = useNavigate();

  const handleClickYes = () => {
    setHair("yes");
  };

  const handleClickNo = () => {
    setHair("no");
  };

  console.info(hair);

  const handleClickBrown = () => {
    setColor("brun");
  };

  const handleClickBlond = () => {
    setColor("blond");
  };

  const handleClickGinger = () => {
    setColor("roux");
  };

  const handleClickOtherColor = () => {
    setColor("autre");
  };

  console.info(color);

  const handleClickStraight = () => {
    setShape("lisse");
  };

  const handleClickWavy = () => {
    setShape("ondule");
  };

  const handleClickFrizzy = () => {
    setShape("frise");
  };

  const handleClickOtherShape = () => {
    setShape("autre");
  };

  console.info(shape);

  const handleClickDry = () => {
    setType("sec");
  };

  const handleClickGreasy = () => {
    setType("gras");
  };

  const handleClickNormal = () => {
    setType("normal");
  };

  const handleClickOtherType = () => {
    setType("autre");
  };

  console.info(type);

  useEffect(() => {
    (async () => {
      const bonusProduct = await fetch(
        `http://localhost:3000/bonusProduct?hairColor=${color}&hairShape=${shape}&hairType=${type}`
      );

      setProduct(await bonusProduct.json());
    })();
  }, [
    handleClickBrown,
    handleClickBlond,
    handleClickGinger,
    handleClickOtherColor,
    handleClickStraight,
    handleClickWavy,
    handleClickFrizzy,
    handleClickOtherShape,
    handleClickDry,
    handleClickGreasy,
    handleClickNormal,
    handleClickOtherType,
  ]);

  const handleClick = () => {
    navigate("/result");
  };

  return (
    <div className="choiceFormContainer">
      <div className="container">
        <div className="imgContainer">
          <img src={StraightHair} width={50} alt="cheveux lisses" />
          <img src={WavyHair} width={50} alt="cheveux ondulés" />
        </div>
        <div className="allChoices">
          <div className="choice">
            <p>Avez-vous des cheveux ?</p>
            <ul className="choicesList">
              <li>
                <CheckBadgeIcon
                  width={25}
                  onClick={handleClickYes}
                  className={hair === "yes" ? "isOk" : "isNotOk"}
                />
                Oui
              </li>
              <li>
                <CheckBadgeIcon
                  width={25}
                  onClick={handleClickNo}
                  className={hair === "no" ? "isOk" : "isNotOk"}
                />
                Non
              </li>
            </ul>
          </div>
          <div className="choice">
            <p>Vos cheveux sont:</p>
            <ul className="choicesList">
              <li>
                <CheckBadgeIcon
                  width={25}
                  onClick={handleClickBrown}
                  className={color === "brun" ? "isOk" : "isNotOk"}
                />
                bruns
              </li>
              <li>
                <CheckBadgeIcon
                  width={25}
                  onClick={handleClickBlond}
                  className={color === "blond" ? "isOk" : "isNotOk"}
                />
                blonds
              </li>
              <li>
                <CheckBadgeIcon
                  width={25}
                  onClick={handleClickGinger}
                  className={color === "roux" ? "isOk" : "isNotOk"}
                />
                roux
              </li>
              <li>
                <CheckBadgeIcon
                  width={25}
                  onClick={handleClickOtherColor}
                  className={color === "autre" ? "isOk" : "isNotOk"}
                />
                autre
              </li>
            </ul>
          </div>
          <div className="choice">
            <p>La forme de vos cheveux est:</p>
            <ul className="choicesList">
              <li>
                <CheckBadgeIcon
                  width={25}
                  onClick={handleClickStraight}
                  className={shape === "lisse" ? "isOk" : "isNotOk"}
                />
                lisse
              </li>
              <li>
                <CheckBadgeIcon
                  width={25}
                  onClick={handleClickWavy}
                  className={shape === "ondule" ? "isOk" : "isNotOk"}
                />
                ondulée
              </li>
              <li>
                <CheckBadgeIcon
                  width={25}
                  onClick={handleClickFrizzy}
                  className={shape === "frise" ? "isOk" : "isNotOk"}
                />
                frisée
              </li>
              <li>
                <CheckBadgeIcon
                  width={25}
                  onClick={handleClickOtherShape}
                  className={shape === "autre" ? "isOk" : "isNotOk"}
                />
                autre
              </li>
            </ul>
          </div>
          <div className="choice">
            <p>Votre type de cheveux:</p>
            <ul className="choicesList">
              <li>
                <CheckBadgeIcon
                  width={25}
                  onClick={handleClickDry}
                  className={type === "sec" ? "isOk" : "isNotOk"}
                />
                sec
              </li>
              <li>
                <CheckBadgeIcon
                  width={25}
                  onClick={handleClickGreasy}
                  className={type === "gras" ? "isOk" : "isNotOk"}
                />
                gras
              </li>
              <li>
                <CheckBadgeIcon
                  width={25}
                  onClick={handleClickNormal}
                  className={type === "normal" ? "isOk" : "isNotOk"}
                />
                normal
              </li>
              <li>
                <CheckBadgeIcon
                  width={25}
                  onClick={handleClickOtherType}
                  className={type === "autre" ? "isOk" : "isNotOk"}
                />
                autre
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button type="submit" className="submitButton" onClick={handleClick}>
        Envoyer
      </button>
    </div>
  );
}

export default ChoiceForm;
