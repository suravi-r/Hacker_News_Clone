import { Link } from 'react-router-dom'
import { useState } from 'react'

const Home = () => {
  const [news] = useState([ ])

  for (let i=1; i<26; i++){
    news.push({
      id: i,
      title: "Single-Shot Optical Neural Network",
      source: "(jbconsulting.substack.com)",
      points: " 1 point by rbanffy 0 minutes ago | ",
      button: <Link to="/comments"><button class="buttons2">comments</button></Link>
    })
  }

  return (
    <div class="news">
      {news.map(((article) => {
        return (
          <div class="news_piece">
          <div class="news-title">
            <span class="font1"> {article.id} &nbsp;</span> 
            {article.title} 
            <span class="source font1">
            {article.source}
            </span>
          </div>
          <div class="about font1">
          &nbsp; &nbsp; &nbsp; 
          {article.points}
          {article.button}
          </div>
          </div>
        )
      }))
    }
    </div>
  )

}

export default Home
