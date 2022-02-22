import { Link } from "react-router-dom"

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Catland</Link>
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/">Home</Link>
                    <Link className="nav-item nav-link" to="/pictures">Pictures</Link>
                    <Link className="nav-item nav-link" to="/words">Words</Link>
                </div>
            </nav>
        </div>
    )
}
export default Header