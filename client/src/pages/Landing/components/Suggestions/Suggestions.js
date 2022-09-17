import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Suggestions.css";

const Suggestions = (display) => {
  const [suggestions, setSuggestions] = useState([]);
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    const getSuggestions = async () => {
      try {
        const res = await axios.get(
          "https://ev1caq100pghbac8errci7hhla23.requestly.me/suggestions  "
        );
        console.log(res.data);
        setSuggestions(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    const getTrends = async () => {
      try {
        const res = await axios.get(
          " https://ev1caq100pghbac8errci7hhla23.requestly.me/trends"
        );
        console.log(res.data);
        setTrends(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getTrends();
    getSuggestions();
  }, []);

  return (
    <div className="suggestion-container">
      <div className="latest-trends">
        <h2>Latest Trends</h2>
        <div className="trends-images">
          {trends.map((trend) => (
            <div className="trend-image">
              <img id="trend-image" src={trend.trend_image} alt="trend" />
              <p style={{ fontWeight: "normal" }}> {trend.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="popular-suggestions">
        <h2>Suggestions</h2>
        <div className="suggestions-list">
          {suggestions.map((suggestion) => (
            <p style={{ fontWeight: "normal" }}> {suggestion.suggestion}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
