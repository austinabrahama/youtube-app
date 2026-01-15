import React, { useState } from 'react';

export const AppContext = React.createContext();

const ContextProvider = ({ children }) => {
  // Initialize based on screen size
  const [showSidebar, setShowSidebar] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1280; // Show by default on xl screens
    }
    return false;
  });
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