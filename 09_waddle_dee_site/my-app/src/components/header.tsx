import { Link } from "react-router-dom";
import { HeaderNavLink } from "./HeaderNavLink";
import { useEffect, useState } from "react";
import waddle_simple_square from "../media/waddle_simple_square.png";

export function Header() {
  const [stickyClass, setStickyClass] = useState('');
  const [scrollHeight, setScrollHeight] = useState(0);
  
  interface page {
    path: string;
    label?: string;
  }
  const pages: Array<page> = [
    { path: "Home" },
    { path: "About" },
    { path: "WaddleDees", label: "Waddle Dees" }
  ];



  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 110 ? setStickyClass('sticky-nav') : setStickyClass('');
      setScrollHeight(windowHeight);
    }
  };


  return (
    <>
      <header className= {"header "+stickyClass} >
        <Link to="/Home" className="title-link">
          <h1 className="site-title">Waddle Dee Site</h1>
        </Link>
        <nav className="site-nav">
          <ul className="nav-list">
            {pages.map((linkPath: { path: string; label?: string }) => {
              return (
                <HeaderNavLink
                  linkPath={linkPath.path}
                  linkLabel={linkPath.label}
                />
              );
            })}
          </ul>
          
        </nav>
        <img src={waddle_simple_square} alt="Waddle" className="waddle-spinner" style={{transform: "rotate("+String(scrollHeight)+"deg)"}}/>
      </header>
    </>
  );
}
