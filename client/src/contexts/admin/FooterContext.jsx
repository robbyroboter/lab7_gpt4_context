import { createContext, useContext, useRef } from "react";
import footerData from "../../mockData/footerData";

const FooterContext = createContext();
const PostFooterContext = createContext();

const FooterContextProvider = ({ children }) => {
    const data = useRef(footerData);

    return (
        <FooterContext.Provider value={data.current}>{children}</FooterContext.Provider>
    );
};

// кастомные хуки для простоты получения
const useFooterContext = () => useContext(FooterContext);
const usePostFooterContext = () => useContext(PostFooterContext);

export { useFooterContext, usePostFooterContext };
export default FooterContextProvider;
