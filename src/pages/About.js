import Transition from "../components/Transition"
import { Link } from "react-router-dom"

function About() {
  const box = { marginTop: 20 }
  return (
    <>
      <Transition />

      <div className="container">
        <h1>About Page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, ea eaque? Perferendis omnis adipisci deserunt vel est laudantium reprehenderit neque culpa, quod iure facilis explicabo saepe, suscipit temporibus dolorem ad?</p>
      <div style={box}>
          <Link className="link" to={`${process.env.PUBLIC_URL}/contact`}>
            <span>&rarr;</span> Contact
        </Link>
      </div>
      
      </div>
    </>
  )
}

export default About
