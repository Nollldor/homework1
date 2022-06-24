import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import styles from "./Header.module.css"

function Header() {
    const [styleHamburger, setStyleHamburger] = useState<string>(styles.hamburger)
    const [styleHorizontalMenu, setStyleHorizontalMenu] = useState<string>(styles.horizontalMenu)
    const hamburgerHandler = () => {
        styleHorizontalMenu === styles.horizontalMenu ?
            setStyleHorizontalMenu(`${styles.horizontalMenu} ${styles.activeHorizontalMenu}`)
            : setStyleHorizontalMenu(styles.horizontalMenu)
        styleHamburger === styles.hamburger ?
            setStyleHamburger(`${styles.hamburger} ${styles.activeHamburger}`)
            : setStyleHamburger(styles.hamburger)
    }

    return (
        <div className={styles.headerWrapper} onMouseEnter={hamburgerHandler} onMouseLeave={hamburgerHandler}>
            <a href="#" className={styleHamburger}>
                <span className={styles.hamburgerRow}></span>
                <span className={styles.hamburgerRow}></span>
                <span className={styles.hamburgerRow}></span>
            </a>

            <nav className={styleHorizontalMenu}>
                <NavLink className={styles.horizontalMenuItem} to={PATH.PRE_JUNIOR}>Pre-junior</NavLink>
                <NavLink className={styles.horizontalMenuItem} to={PATH.JUNIOR}>Junior</NavLink>
                <NavLink className={styles.horizontalMenuItem} to={PATH.JUNIOR_PLUS}>Junior_plus</NavLink>
            </nav>
        </div>
    )
}

export default Header
