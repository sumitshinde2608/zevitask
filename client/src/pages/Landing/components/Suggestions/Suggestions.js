import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Suggestions.css";

const Suggestions = (display) => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const getSuggestions = async () => {
      // const URL = `https://staging.search.zevi.in/autocomplete/?store=hulpoc&usecache=False&q=?${display.query}`;
      try {
        const res = await axios.get(
          `https://staging.search.zevi.in/autocomplete/?store=hulpoc&usecache=False&q=?${display.query}`
        );
        console.log("received data", res.data.autocomplete_list);
        setSuggestions(res.data.autocomplete_list);
      } catch (err) {
        console.log(err);
      }
    };

    getSuggestions();
  }, [display.query]);

  useEffect(() => {
    console.log("Suggestions received", suggestions);
  }, [suggestions]);

  return (
    <div className="suggestion-container">
      <div className="popular-suggestions">
        <div className="suggestions-list">
          {suggestions.map((suggestion) => (
            <>
              <Link
                onClick={(event) =>
                  !suggestion ? event.preventDefault() : null
                }
                to={`search/?q=${suggestion}`}
              >
                <span
                  style={{
                    fontSize: "18px",
                    marginBottom: "15px",
                  }}
                >
                  {" "}
                  {suggestion}
                  <br />
                </span>
              </Link>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
