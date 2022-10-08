import * as React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <div class="header">
        <a href="index.html">
          <img
            class="header__picture"
            src="/assets/images/logo_fcjunior.png"
            alt="logo du site fc junior"
          />
        </a>

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
        <form class="header__search search" action="GET">
          <input
            class="search__input"
            type="search"
            placeholder="recherche..."
          />
          <button type="submit" class="search__button">
            <i class="fa fa-search search__button" aria-hidden="true"></i>
          </button>
        </form>

        <div class="interaction">
          <button class="interaction-connexion">
            <a href="connexion.html">Se connecter</a>
          </button>
          <button class="interaction-connexion">
            <a href="inscription.html">S'inscrire</a>
          </button>

          <a href="panier.html" class="interaction-shopping-basket">
            <i
              class="fa fa-shopping-basket interaction-shopping-basket"
              aria-hidden="true"
            ></i>
          </a>
        </div>
      </div>
      <div class="introduction">
        <span class="introduction__title">Data Football</span>
        <span class="introduction__subtitle">
          Statistique sur les meilleurs joueurs de foot du monde
        </span>
      </div>
    </header>
  );
}
export default Header;
