import { useState, useEffect, useCallback, useMemo, createContext, useContext } from "react";

const AppContext = createContext<any>(null);

const useAppContext = () => {
    const context = useContext(AppContext);

}

export { AppContext , useAppContext }