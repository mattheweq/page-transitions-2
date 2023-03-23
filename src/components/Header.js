import { Link } from "react-router-dom"
export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link className="link" to={`${process.env.PUBLIC_URL}/`}>
            LOGO
          </Link>
      </div>
      <ul>
        <li>
          <Link className="link" to={`${process.env.PUBLIC_URL}/`}>
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to={`${process.env.PUBLIC_URL}/about`}>
            About
          </Link>
        </li>
        <li>
          <Link className="link" to={`${process.env.PUBLIC_URL}/contact`}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}
