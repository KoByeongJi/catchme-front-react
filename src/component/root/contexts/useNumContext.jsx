import { createContext, useContext, useMemo, useState } from "react";

export const NumContext = createContext({
    num: 0,
    setNum: () => { },
});

export default function NumContextProvider({ children }) {
    const [num, setNum] = useState(0);
    const value = useMemo(() => ({ num, setNum }), [num, setNum]);

    return <NumContext.Provider value={value}>{children}</NumContext.Provider>
}

export const useNumContext = () => useContext(NumContext);
