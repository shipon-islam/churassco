"use client";
import { createContext, useContext, useState } from "react";
const HeaderContext = createContext();

export function UseHeader() {
  return useContext(HeaderContext);
}

export default function HeaderContextProvider({ children }) {
  const [isShowHeader, setIsShowHeader] = useState(true);

  return (
    <HeaderContext.Provider value={{ isShowHeader, setIsShowHeader }}>
      {children}
    </HeaderContext.Provider>
  );
}
