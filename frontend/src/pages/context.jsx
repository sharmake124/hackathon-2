import React, { createContext, useState, useContext, useMemo } from "react";
// Étape 1 : créer un context "React" basique
const ProductContext = createContext();
// Étape 2 : créer le provider de mon context
// eslint-disable-next-line react/prop-types
export function ProductProvider({ children }) {
  const [product, setProduct] = useState("");

  const contextValue = useMemo(() => {
    return { product, setProduct };
  }, []);
  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
}
// Étape 3 : créer un hook pour récupérer les valeurs du context depuis
// n'importe quel composant dans l'application
const useProductContext = () => useContext(ProductContext);
export default useProductContext;
