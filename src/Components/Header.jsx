import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "../Styles/Header.scss"
import 'boxicons'

const Header = ({ menu, children }) => {
    const [active, setActive] = useState(false);

    function classSetter() {
        active === false ? setActive(true) : setActive(false)
    }
    function linkSetter() {
        setActive(false)
    }

    return (
        <div className="Header">
            <div className="leftSideLogo">
                <h2>LOGO</h2>
            </div>
            <div className={active === false ? "rightSideDesktopLinks" : "rightSideMobileLinks"}>
                <div className="searcher">{children}</div>
                {menu.filter(e => e.menubar === true)
                    .map(e => <Link onClick={linkSetter} key={e.name} to={e.path}>{e.name}</Link>)}
            </div>

            <div className="navIcon">
                <box-icon onClick={() => classSetter()} className="hamburgerIcon" size="lg" name='menu' color='#ffffff' ></box-icon>
            </div>
        </div>
    )
}
export default Header