import React from "react";
import "./home.css";

import Searchbar from "../../components/Searchbar";
import { ResultList } from "../../components";

export default function Home() {
  return (
    <div className="home">
      <Searchbar />
      <ResultList />
    </div>
  );
}
