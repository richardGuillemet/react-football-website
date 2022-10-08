import * as React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav class="header__nav nav">
      <ul>
        <li class="nav__link">
          <a href="index.html">Accueil</a>
        </li>
        <li class="nav__link">
          <a href="players.html">Joueurs</a>
        </li>
        <li class="nav__link">
          <a href="teams.html">Equipes</a>
        </li>
        <li class="nav__link">
          <a href="leagues.html">Championnats</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
