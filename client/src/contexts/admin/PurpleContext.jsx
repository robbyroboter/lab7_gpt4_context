import { createContext, useContext, useRef } from "react";
import {purpleData} from "../../mockData/purpleData";

const PurpleContext = createContext();
const PostPurpleContext = createContext();

const PurpleContextProvider = ({ children }) => {
    const data = useRef(purpleData);

    return (
        <PurpleContext.Provider value={data.current}>{children}</PurpleContext.Provider>
    );
};

// кастомные хуки для простоты получения
const usePurpleContext = () => useContext(PurpleContext);
const usePostPurpleContext = () => useContext(PostPurpleContext);

export { usePurpleContext, usePostPurpleContext };
export default PurpleContextProvider;
