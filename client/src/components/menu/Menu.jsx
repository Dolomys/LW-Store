import './menu.scss'

export const Menu = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
        <li onClick={() => setMenuOpen(false)}>
                <a href="#contact">SOLDES</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#intro">Nouveautés</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#projects">Homme</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#works">Femme</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#about">Enfants</a>
            </li>
        </ul>
    </div>
  )
}
