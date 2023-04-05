import React, { useContext } from "react";
import "./resultlist.css";
import ResultCard from "../ResultCard";
import { SearchContext } from "../../context/searchContext";

export default function ResultList() {
  const { searchResults } = useContext(SearchContext);
  return (
    <div className="resultlist">
      {searchResults?.map((result) => (
        <ResultCard key={result.imdbId} info={result} />
      ))}
    </div>
  );
}
