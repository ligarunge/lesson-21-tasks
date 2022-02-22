import { Link } from "react-router-dom"

function Footer() {

    return (
        <div className="mb-4 border-top">
            <div className="container mt-2">
                © 2017-2022 Company, Inc. · <Link to="/">Privacy ·</Link> <Link to="/">Terms</Link>
            </div>
        </div>
    )
}
export default Footer