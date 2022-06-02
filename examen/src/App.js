import React, { useEffect, useState } from "react";
import axios from 'axios';
import './diseno.css';
const App = () => {

  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const res = await axios.get("https://newsapi.org/v2/everything?q=apple&from=2022-05-31&to=2022-05-31&sortBy=popularity&apiKey=38daf29e5468416fb72a4afa77b6f3d2");

      setNews(res.data.articles);
    }
    getNews();
  }, [])


  return (
    <div  class="margin" className="container">
      <h1 class="header">News</h1>
       <h3 class="text">to API https://newsapi.org/ </h3>
      <table>
        <tbody>
           <div>
           {
            news.map((item) => (
              <div class="information">
                <img src={`${item.ulrToImage}`} alt="" />
                <h3>
                  <a href={item.url}>{item.title}</a>
                </h3>
                <p>{item.description}</p>
              </div>
            ))
          }
           </div>
         
        </tbody>
      </table>
    </div>
  );
}

export default App;