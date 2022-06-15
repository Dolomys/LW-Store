import { Link } from 'react-router-dom'
import './menu.scss'

export const Menu = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
        <li onClick={() => setMenuOpen(false)}>
                <Link to="/products/?Soldes">SOLDES</Link>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <Link to="/products/?News">Nouveautés</Link>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <Link to="/products/?Man">Homme</Link>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <Link to="/products/?Women">Femme</Link>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <Link to="/products/?Kids">Enfants</Link>
            </li>
        </ul>
    </div>
  )
}
