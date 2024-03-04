
import logo from "../assets/logo.png"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header>
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <nav>
            <Link to="/about"> About</Link>
            <Link to="/vans"> Vans</Link>
        </nav>
    </header>
  )
}

export default Header