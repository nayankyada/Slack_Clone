import { createContext, useContext, useState } from "react";

export const UserContext = createContext({
  user: null,
  login: () => {}
});

export const ContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const setLogin = (user) => {
    setUser(user);
  };
  return (
    <UserContext.Provider value={{ user: user, login: setLogin }}>
      {props.children}
    </UserContext.Provider>
  );
};
export const userValue = () => useContext(UserContext);
