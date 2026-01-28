import { useState } from 'react'
import './Filters.css'
import { Link } from "react-router-dom";

export default function Filters() {
const [menu, setMenu ] = useState("All News");

  return (
      <div className="filters">
        <ol className="filter-items">
            <li onClick={() => setMenu("AllNews")} className={menu==="All News"?"active":""}><Link to="/general">All News</Link> </li>
            <li onClick={() => setMenu("Business")} className={menu==="Business"?"active":""}><Link to="/business">Business</Link> </li>
            <li onClick={() => setMenu("Sports")} className={menu==="Sports"?"active":""}><Link to="/sports">Sports</Link> </li>
            <li onClick={() => setMenu("Entertainment")} className={menu==="Entertainment"?"active":""}><Link to="/entertainment">Entertainment</Link> </li>
            <li onClick={() => setMenu("Health")} className={menu==="Health"?"active":""}><Link to="/health">Health</Link> </li>
            <li onClick={() => setMenu("Technology")} className={menu==="Technology"?"active":""}><Link to="/tech">Technology</Link> </li>
            <li onClick={() => setMenu("Science")} className={menu==="Science"?"active":""}><Link to="/science">Science</Link> </li>
        </ol>
      </div>
  )
}
