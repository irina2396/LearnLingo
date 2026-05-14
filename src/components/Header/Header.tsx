import { Link } from "react-router-dom"
import css from "./Header.module.css"

export default function Header() {
    return (
        <header className={css.header}>
            <div className={`container ${css.headerContainer}`}>
                <Link className={css.logo} to="/">
                    <svg className={css.logoIcon} width={28} height={28}>
                        <use href="/symbol-defs.svg#icon-ukraine"></use>
                    </svg>
                    LearnLingo
                </Link>
                <nav className={css.navigation}>
                    <Link to="/">Home</Link>
                    <Link to="">Teachers</Link>
                </nav>
                <div className={css.authButtons}>
                    <svg className={css.iconLogin} width={20} height={20}>
                        <use className={css.loginIcon} href="/symbol-defs.svg#icon-log-in-01"/>
                    </svg>
                    <button className={css.authButton} type="button">Log in</button>
                    <button className={css.authButton} type="button">Registration</button>
                </div>
            </div>
        </header>
    )
}