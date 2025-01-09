import { createContext, useState } from "react";

export const CaptainDataContext = createContext();

export function CaptainContext({ children }) {
  const [captain, setCaptain] = useState(null);
  const [captainError, setCaptainError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const updateCaptain = (captainData) => {
    setCaptain(captainData);
  };

  const value = {
    captain,
    setCaptain,
    captainError,
    setCaptainError,
    isLoading,
    setIsLoading,
    updateCaptain,
  };

  return (
    <CaptainDataContext.Provider value={value}>
      {children}
    </CaptainDataContext.Provider>
  );
}

export default CaptainContext;
