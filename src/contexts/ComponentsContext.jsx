import { createContext, useContext, useEffect, useState } from "react";

const ComponentsContext = createContext();
const COMPONENTS_KEY = "components";

export const ComponentsProvider = ({ children }) => {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(COMPONENTS_KEY);
    if (stored) {
      setComponents(JSON.parse(stored));
    }
  }, []);

  const save = (data) => {
    localStorage.setItem(COMPONENTS_KEY, JSON.stringify(data));
    setComponents(data);
  };

  const addComponent = (comp) => save([...components, comp]);
  const updateComponent = (updated) =>
    save(components.map(c => c.id === updated.id ? updated : c));
  const deleteComponent = (id) =>
    save(components.filter(c => c.id !== id));

  return (
    <ComponentsContext.Provider value={{ components, addComponent, updateComponent, deleteComponent }}>
      {children}
    </ComponentsContext.Provider>
  );
};

export const useComponents = () => useContext(ComponentsContext);