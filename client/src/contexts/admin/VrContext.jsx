import { createContext, useContext, useRef } from "react";
import {vrData} from "../../mockData/vrData";

const VrContext = createContext();
const PostVrContext = createContext();

const VrContextProvider = ({ children }) => {
    const data = useRef(vrData);

    return (
        <VrContext.Provider value={data.current}>{children}</VrContext.Provider>
    );
};

// кастомные хуки для простоты получения
const useVrContext = () => useContext(VrContext);
const usePostVrContext = () => useContext(PostVrContext);

export { useVrContext, usePostVrContext };
export default VrContextProvider;
