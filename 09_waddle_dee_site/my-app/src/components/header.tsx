import { Link } from "react-router-dom"

export function Header(){
    // const pages = ["Home","About"];
    return (
        <>
        <header className='main-header'>
        <Link to="/Home" className="title-link">
            <h1 className='site-title'>Waddle Dee Site</h1>
            </Link>
            <nav className='site-nav'>
                <ul className='nav-list'>
                <li className="nav-item">
                    <Link to="/Home" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/About">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/WaddleDees">Waddle Dees</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Deeterbase">Deeterbase</Link>
                </li>
                </ul>
            </nav>
            </header>
        </>
    )
}