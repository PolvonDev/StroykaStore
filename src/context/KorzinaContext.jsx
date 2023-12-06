import { createContext, useEffect, useState } from "react";

export const KorzinaContext = createContext(null);

const KorzinaProvider = ({ children }) => {
  const storage = localStorage.getItem("korzina-products");
  const [data, setData] = useState(JSON.parse(storage) || []);
  const AddTOLocaleStorage = (item) => {
    const state = data.some((items) => items?.id === item?.id);

    if (!state) {
      setData([...data, item]);
    }
  };


  useEffect(() => {
    localStorage.setItem("korzina-products", JSON.stringify(data));
  }, [data]);

 

  return (
    <KorzinaContext.Provider
      value={{ AddTOLocaleStorage, data, setData,  }}
    >
      {children}
    </KorzinaContext.Provider>
  );
};

export default KorzinaProvider;
