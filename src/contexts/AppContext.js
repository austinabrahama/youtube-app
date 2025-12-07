import React, { useState } from 'react';

export const AppContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar((prevShowSidebar) => !prevShowSidebar);
  }

  const toggleSearchBar = (flag) => {
    setShowSearchBar(flag);
  }

  return (
    <AppContext.Provider value={{ showSidebar, toggleSidebar, showSearchBar, toggleSearchBar }}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider