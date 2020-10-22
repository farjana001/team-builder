import React, { useState, useEffect } from 'react';
import User from './Components/User/User';
import { Jumbotron } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import News from './Components/News/News';
import axios from 'axios';

const App = () => {
  const url = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-29&sortBy=publishedAt&apiKey=67b4ee94059b42a8b92c38bc8ae99453';

  const [news, setNews] = useState([]);
  // useEffect(() => {
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(data => setNews(data.articles))
  // }, [])

  useEffect(() => {
    axios(url)
    .then(data => setNews(data.data.articles))
  }, [])

  const firstFive = news.slice(0, 5);
  return (
    <div>
      <Jumbotron>
        <h1>Hot News: {firstFive.length}</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
        <Button variant="contained" color="secondary">
        Browse more
      </Button>
        </p>
      </Jumbotron>
      {
        firstFive.map(article => <User key={article.url} article={article}></User>)
      }
      {
        firstFive.map(article => <News key={article.url} article={article}></News>)
      }
    </div>
  );
};

export default App;