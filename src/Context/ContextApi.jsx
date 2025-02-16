import PropTypes from "prop-types";
import { useContext, useState, createContext } from "react";

const SearchContext = createContext();

function ContextApi({ children }) {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

ContextApi.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a ContextApi");
  }
  return context;
}

export default ContextApi;
