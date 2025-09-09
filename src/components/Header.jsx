// src komponenter Header.jsx
import { NavLink } from "react-router-dom";
export default function Header({ title = "My Anime" }) {
  // jsx må ha root så  ruker header som topp element
  return (
    <header>
      <h1>{title}</h1>
      <p>This is a series of Anime</p>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/todo">Todo</NavLink>
        <NavLink to="/api">API</NavLink>
      </nav>
    </header>
  );
}
