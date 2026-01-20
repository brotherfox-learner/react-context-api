import { createContext } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const userData = {
        username: "John",
        avatar: "https://placedog.net/100/100",
        level: "platinum",
      };
    const {username, avatar, level} = userData;
  return (
    <UserContext.Provider value={{ username, avatar, level }}>
      {children}
    </UserContext.Provider>
  );
};
