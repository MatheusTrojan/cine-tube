import { Link } from 'react-router-dom';
import styles from "./Header.module.css"
import logo from "./logo.png";


function Header() {
  return (
    <header className={styles.header}>
        <Link to="./">
            <img src={logo} alt="Logo do cinetube"/>
        </Link>
        <nav>

        </nav>
    </header>
  )
}

export default Header
