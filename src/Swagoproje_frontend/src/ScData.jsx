import React, { useState, useEffect } from "react";

const ScData = () => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://theswago.com/https://sunpump.meme/");
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const elements = doc.querySelectorAll("h1");
        const titlesArray = Array.from(elements).map((el) => el.textContent);
        setTitles(titlesArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Scraped Titles</h1>
      <ul>
        {titles.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ScData;
