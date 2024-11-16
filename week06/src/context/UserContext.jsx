import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [isLogined, setIsLogined] = useState(false);
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  console.log("탑바 accessToken: ", accessToken); //
  console.log("탑바 refreshToken: ", refreshToken); //

  useEffect(() => {
    if (accessToken) {
      setIsLogined(true);
    } else {
      setIsLogined(false);
    }
  }, [accessToken]);

  return (
    <UserContext.Provider value={{ isLogined, setIsLogined, accessToken }}>
      {children}
    </UserContext.Provider>
  );
}
