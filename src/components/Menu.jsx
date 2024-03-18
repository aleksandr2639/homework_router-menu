import { NavLink } from "react-router-dom";

const setActineClass = ({ isActive }) => isActive ? "menu__item menu__item-active" : "menu__item";

const Menu = () => {
    return (
      <nav className="menu">
        <NavLink className={setActineClass} to="/">Главная</NavLink>
        <NavLink className={setActineClass} to="/drift">Дрифт-такси</NavLink>
        <NavLink className={setActineClass} to="/timeattack">Time Attack</NavLink>
        <NavLink className={setActineClass} to="/forza">Forza Karting</NavLink>
      </nav>
    )
  }

export default Menu;