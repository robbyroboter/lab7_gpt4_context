import { createContext, useContext, useRef } from "react";
import brandsData from "../../mockData/brandsData";

const BrandsContext = createContext();
const PostBrandsContext = createContext();

const BrandsContextProvider = ({ children }) => {
  const data = useRef(brandsData);

  // Возвращаем 2 контекста
  // 1 - для получения данных
  // 2 - для отправки данных на сервер и получения результата
  return (
    <BrandsContext.Provider value={data.current}>
      {children}
    </BrandsContext.Provider>
  );
};

// кастомные хуки для простоты получения
const useFutureHereContext = () => useContext(BrandsContext);
const usePostFutureHereContext = () => useContext(PostBrandsContext);

export { useFutureHereContext, usePostFutureHereContext };
export default BrandsContextProvider;
