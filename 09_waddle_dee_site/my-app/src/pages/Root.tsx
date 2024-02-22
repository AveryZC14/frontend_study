import { Outlet , Link } from "react-router-dom";
import { Header } from "../components/Header";

export function Root(){
    return (
        <>
            <Header/>
            <main className='main-app'>
                <div id="detail">
                    <Outlet />
                </div>
            </main>
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