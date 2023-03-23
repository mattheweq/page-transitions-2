import Transition from "../components/Transition"
import { Link } from "react-router-dom"

function Home() {
  const box = { color: "red", background: "white", width: "fit-content", padding: 20, textAlign: "center" }
  return (
    <>
      <Transition />
      {/* If you prefer the transition to display an image instead of a block colour add an empty div with a css image background class "home-overlay" */}
      <div className="full-screen home-overlay"></div>
      {/* ^^^^^^ see global.css for background image class styling */}
      <div className="container center">
       
        <div style={box}>
        <h1>Home Page</h1>
          <Link className="link" to={`${process.env.PUBLIC_URL}/about`}>
           <span>&rarr;</span> About
        </Link>
        </div>
        
      </div>
    </>
  )
}

export default Home
