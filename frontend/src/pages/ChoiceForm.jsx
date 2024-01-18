import { useState } from "react";
import "./ChoiceForm.css";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import StraightHair from "../assets/cheveuxlisses.png";
import WavyHair from "../assets/cheveuxondules.png";

function ChoiceForm() {
  const [hair, setHair] = useState(null);
  const [color, setColor] = useState(null);
  const [shape, setShape] = useState(null);
  const [type, setType] = useState(null);

  const handleClickYes = () => {
    setHair("yes");
  };

  const handleClickNo = () => {
    setHair("no");
  };

  console.info(hair);

  const handleClickBrown = () => {
    setColor("brown");
  };

  const handleClickBlond = () => {
    setColor("blond");
  };

  const handleClickGinger = () => {
    setColor("ginger");
  };

  const handleClickOtherColor = () => {
    setColor("other color");
  };

  console.info(color);

  const handleClickStraight = () => {
    setShape("straight");
  };

  const handleClickWavy = () => {
    setShape("wavy");
  };

  const handleClickFrizzy = () => {
    setShape("frizzy");
  };

  const handleClickOtherShape = () => {
    setShape("other shape");
  };

  console.info(shape);

  const handleClickDry = () => {
    setType("dry");
  };

  const handleClickGreasy = () => {
    setType("greasy");
  };

  const handleClickNormal = () => {
    setType("normal");
  };

  const handleClickOtherType = () => {
    setType("other type");
  };

  console.info(type);

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
                  className={color === "brown" ? "isOk" : "isNotOk"}
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
                  className={color === "ginger" ? "isOk" : "isNotOk"}
                />
                roux
              </li>
              <li>
                <CheckBadgeIcon
                  width={25}
                  onClick={handleClickOtherColor}
                  className={color === "other" ? "isOk" : "isNotOk"}
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
                  className={shape === "straight" ? "isOk" : "isNotOk"}
                />
                lisse
              </li>
              <li>
                <CheckBadgeIcon
                  width={25}
                  onClick={handleClickWavy}
                  className={shape === "wavy" ? "isOk" : "isNotOk"}
                />
                ondulée
              </li>
              <li>
                <CheckBadgeIcon
                  width={25}
                  onClick={handleClickFrizzy}
                  className={shape === "frizzy" ? "isOk" : "isNotOk"}
                />
                frisée
              </li>
              <li>
                <CheckBadgeIcon
                  width={25}
                  onClick={handleClickOtherShape}
                  className={shape === "other shape" ? "isOk" : "isNotOk"}
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
                  className={type === "dry" ? "isOk" : "isNotOk"}
                />
                sec
              </li>
              <li>
                <CheckBadgeIcon
                  width={25}
                  onClick={handleClickGreasy}
                  className={type === "greasy" ? "isOk" : "isNotOk"}
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
                  className={type === "other type" ? "isOk" : "isNotOk"}
                />
                autre
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button type="submit" className="submitButton">
        Envoyer
      </button>
    </div>
  );
}

export default ChoiceForm;
