import { NavLink } from "react-router-dom";

export function HeaderNavLink(
    {linkPath,linkLabel = "N/A"}:any
){
    if (linkLabel === "N/A"){
        linkLabel = linkPath;
    }
    return(
        <li className="nav-item">
            <NavLink to={"/"+linkPath} className="nav-link font-main">{linkLabel}</NavLink>
        </li>
    )

}