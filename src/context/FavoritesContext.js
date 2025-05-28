import React, { createContext, useState } from "react";

const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

 
  const addToFavorites = (country) => {
    const exists = favorites.find((item) => item.cca3 === country.cca3);
    if (!exists) setFavorites([...favorites, country]);
  };

  
  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext, FavoritesProvider };
