import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BG_URL} alt="logo" />
      </div>

      <GptSearchBar />
      <GptSuggestions />
    </div>
  );
};

export default GptSearch;
