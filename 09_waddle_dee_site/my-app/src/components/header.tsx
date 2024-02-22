export function header(){
    return (
        <>
        <header className='main-header'>
            <a href="/Home">
            <h1 className='site-title'>Waddle Dee Site</h1>
            </a>
            <nav className='site-nav'>
                <ul className='nav-list'>
                <li className="nav-item">
                    <a href="/" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="google.com" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                    <a href="google.com" className="nav-link">Waddle Dees</a>
                </li>
                <li className="nav-item">
                    <a href="google.com" className="nav-link">Deeterbase</a>
                </li>
                </ul>
            </nav>
            </header>
        </>
    )
}