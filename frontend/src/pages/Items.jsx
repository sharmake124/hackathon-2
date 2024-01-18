// import { useEffect } from "react";
import Product from "../components/product";

function Home() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("http://localhost:3000/api/basicRoutes");

  //     const json = await response.json();

  //     if (response.ok) {
  //       console.info(json);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="home">
      <Product />
    </div>
  );
}

export default Home;
