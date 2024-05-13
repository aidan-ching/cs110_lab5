import "./App.css";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

import Title from "./Title";

import { useState, useEffect } from "react";

function App() {
  const [articles, setArticles] = useState();

  const [sort, setSort] = useState("viewed");
  const [time, setTime] = useState("1");
  const [amount, setAmount] = useState(6);

  const apiKey = "4WAxWEHUvrRA6k1lotCWQv5AHuXGAv9o";
  const url = `https://api.nytimes.com/svc/mostpopular/v2/${sort}/${time}.json?api-key=${apiKey}`;

  // console.log(url);

  const getArticles = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data); // you can view if a response went through in developer mode.
      setArticles(data.results); // it should at most display 15 articles
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    getArticles();
  }, [sort, time]);

  return (
    <div className="App">
      <Title sort={sort} time={time}/>
      <div className="sidebar-article-container">
        <Sidebar setSort={setSort} setTime={setTime} setAmount={setAmount}/>
        <Articles articles={articles} amount={amount}/>
      </div>
    </div>
  );
}

export default App;
