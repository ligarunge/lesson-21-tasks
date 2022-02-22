
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Pictures from "../Pages/Pictures";
import Words from "../Pages/Words";

function Content() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/words" element={<Words />} />
                <Route path="/pictures" element={<Pictures />} />
            </Routes>
        </div>
    )
}
export default Content