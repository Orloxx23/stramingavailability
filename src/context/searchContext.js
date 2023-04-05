import React from "react";

const SearchContext = React.createContext();

function SearchProvider(props) {
  const [searchResults, setSearchResults] = React.useState([]);

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      {props.children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };
