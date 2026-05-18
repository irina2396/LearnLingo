import { Link } from "react-router-dom"
import css from "./Header.module.css"

export default function Header() {
    return (
        <header className={css.header}>
            <div className={`container ${css.headerContainer}`}>
                <nav className={css.headerNav}>
                    <Link className={css.logo} to="/">
                        <svg className={css.logoIcon} width={28} height={28}>
                            <use href="/symbol-defs.svg#icon-ukraine"></use>
                        </svg>
                        LearnLingo
                    </Link>
                        <ul className={css.navList}>
                            <li className={css.navItem}><Link className={css.navLink} to="/">Home</Link></li>
                            <li className={css.navItem}><Link className={css.navLink} to="/teachers">Teachers</Link></li>
                        </ul>
                </nav>
                <div className={css.authItem}>
                    <button className={css.buttonLogin} type="button">
                        <svg className={css.iconLogin} width={20} height={20}>
                            <use href="/symbol-defs.svg#icon-log-in-01" />
                        </svg>
                        Log in
                    </button>

                    <button className={css.buttonRegistration} type="button">
                        Registration
                    </button>
                </div>
            </div>
        </header>
    )
}