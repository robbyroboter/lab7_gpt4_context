import { createContext, useContext, useRef } from "react";
import happensBlogData from "../../mockData/happensBlogData";

const HappensBlogContext = createContext();
const PostHappensBlogContext = createContext();

const HappensBlogContextProvider = ({ children }) => {
    const data = useRef(happensBlogData);

    return (
        <HappensBlogContext.Provider value={data.current}>{children}</HappensBlogContext.Provider>
    );
};

// кастомные хуки для простоты получения
const useHappensBlogContext = () => useContext(HappensBlogContext);
const usePostHappensBlogContext = () => useContext(PostHappensBlogContext);

export { useHappensBlogContext, usePostHappensBlogContext };
export default HappensBlogContextProvider;
