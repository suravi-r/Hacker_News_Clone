import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div class="nav-bar">
      <div class="title">
        Hacker News
      </div>
      <Link to="/"><button class="buttons">new</button></Link>
      <Link to="http://127.0.0.1:5500/HackerNews/index.html"><button class="buttons">best</button></Link>
      <Link to="/comments"><button class="buttons">comments</button></Link>

    </div>
  )
}

export default Navbar
