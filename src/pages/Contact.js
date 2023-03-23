import Transition from "../components/Transition"
import { Link } from "react-router-dom"

function Contact() {
  const h1 = { color: "yellow" }
  const box = { color: "red", background: "white", width: "fit-content", padding: 20 }
  return (
    <>
      <Transition />
      {/* Override the fallback block colour with your own coloured class "block-col" */}
      
      <div className="full-screen block-col"></div>

      {/* if "block-col" class not specified --fallback-transition-block-col is used. see global.css  */}
      <div className="container center">
        <h1 style={h1}>Contact Page</h1>

        <div style={box}>
          <Link className="link" to={`${process.env.PUBLIC_URL}/`}>
            <span>&rarr;</span> Home
          </Link>
        </div>

      </div>
    </>
  )
}

export default Contact
