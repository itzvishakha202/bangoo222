import "./navbar.css"
import { Link } from "react-router-dom"
function Navbar(){
    return(
        <div className="navbar">
            Bangoo
        
<div className="nav-links">
    <Link to="/home" className="nav-link">Home</Link>
    <Link to="/about" className="nav-link">About</Link>
    <Link to="/contact" className="nav-link">Contact</Link>
        </div>
        </div>
    )
}
export default Navbar