import HeaderLink from 'components/HeaderLink';
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
                <HeaderLink url="./">
                    Home
                </HeaderLink>

                <HeaderLink url="./favoritos">
                    Favoritos
                </HeaderLink>
            </nav>
            
        </header>
    )
}

export default Header
