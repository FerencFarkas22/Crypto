import React from 'react'
import { Link } from "react-router-dom"
import "../Styles/Header.scss"


const Header = ({ menu, children }) => {


    return (
        <div className="Header">
            <div className="leftSideLogo">
                <h2>LOGO</h2>
            </div>
            <div className="rightSideDesktopLinks">
            {menu.filter(e => e.menubar === true)
            .map(e => <Link key={e.name} to={e.path}>{e.name}</Link>)}
            </div>
            <div className="searcher">{children}</div>
        </div>
    )
}
export default Header