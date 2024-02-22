import { Link } from "react-router-dom";
import { HeaderNavLink } from "./HeaderNavLink";

export function Header() {
  interface page {
    path: string;
    label?: string;
  }
  const pages: Array<page> = [
    { path: "Home" },
    { path: "About" },
    { path: "WaddleDees", label: "Waddle Dees" }
  ];
  return (
    <>
      <header className="main-header">
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
      </header>
    </>
  );
}
