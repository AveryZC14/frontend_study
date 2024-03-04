import { Outlet , Navigate } from "react-router-dom";
import { Header } from "../components/header";

export function Root(){
    return (
        <>
            <Header/>
            <Navigate to="/Home"/>

            <div id="detail">
                <Outlet />
            </div>
            <footer>
            <h2>
                links
            </h2>
            <ul>
                <li className="footer_li"><a href="https://google.com" className="footer_a">me</a></li>
                <li className="footer_li"><a href="https://google.com" className="footer_a">a</a></li>
                <li className="footer_li"><a href="https://google.com" className="footer_a">b</a></li>
                <li className="footer_li"><a href="https://google.com" className="footer_a">c</a></li>
            </ul>
            </footer>
        </>
    )
}