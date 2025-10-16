// src komponenter Header.jsx
import { NavLink } from "react-router-dom";
export default function Header({ title = "My Anime" }) {
  // jsx må ha root så  ruker header som topp element
  return (
    <header>
      <h1>{title}</h1>
      <p>This is a series of Anime</p>
      <nav>
        <NavLink to="/"className={({isActive})=> isActive? "active": undefined}>Home</NavLink>
        <NavLink to="/todo"className={({isActive})=> isActive? "active": undefined}>Todo</NavLink>
        <NavLink to="/api"className={({isActive})=> isActive? "active": undefined}>API</NavLink>
      </nav>
    </header>
  );
}
