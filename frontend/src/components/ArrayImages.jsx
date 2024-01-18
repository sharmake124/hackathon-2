import "./ArrayImages.css";

import image1 from "../assets/images.jpg";
import image2 from "../assets/images (1).jpg";
import image3 from "../assets/images (10).jpg";
import image4 from "../assets/images (11).jpg";
import image5 from "../assets/images (12).jpg";
import image6 from "../assets/images (2).jpg";
import image7 from "../assets/images (3).jpg";
import image8 from "../assets/images (4).jpg";
import image9 from "../assets/téléchargement (3).jpg";
import image10 from "../assets/téléchargement (2).jpg";
import image11 from "../assets/téléchargement (1).jpg";
import image12 from "../assets/téléchargement.jpg";
import image13 from "../assets/images (9).jpg";
import image14 from "../assets/images (8).jpg";
import image15 from "../assets/images (7).jpg";
import image16 from "../assets/images (6).jpg";
import image17 from "../assets/images (5).jpg";

function ArrayImages() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
  ];

  return (
    <div className="arrayImage">
      {images.map((img) => (
        <div className="card">
          <div className="images">
            <img src={img} alt="" />
            <p className="productName">productName</p>
            <p className="priceName">price: $30</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArrayImages;
