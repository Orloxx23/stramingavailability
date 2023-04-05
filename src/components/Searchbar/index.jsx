import React, { useContext, useState } from "react";
import "./searchbar.css";
import { SearchContext } from "../../context/searchContext";

export default function Searchbar() {
  const [value, setValue] = useState("");
  const { setSearchResults } = useContext(SearchContext);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const tempValue = value.trim();
    if (!value || tempValue === "") return;

    const options = {
      method: "GET",
      /*headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
      },*/
      headers: {
        "X-RapidAPI-Key": "009f485739msh2522c13b0e8f9e7p14e54fjsn35e877bf7207",
        "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
      },
    };

    fetch(
      `https://streaming-availability.p.rapidapi.com/v2/search/basic?country=us&services=netflix%2Cprime.buy%2Chbo%2Cdisney&keyword=${value}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setSearchResults(response.result);
        console.log(response);
      })
      .catch((err) => console.error(err));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="group">
        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input
          placeholder="Search"
          type="search"
          className="input"
          onChange={handleChange}
        />
      </div>
      <button className="search-btn" type="submit">
        Button
      </button>
    </form>
  );
}