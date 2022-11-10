function Home() {
  return (
    <div>
      <section id="presentation" class="presentation">
        <h1 class="titleH1 presentation__title">
          Bienvenue sur le site du FC Junior
        </h1>
        <p class="presentation__texte">
          Ce site a pour objectif de servir de Template dans le développement de
          petits projets d'entrainement sur diverses technos. Les datas sur les
          joueurs, les clubs et les championnats ne sont pas actualisées
          (peut-être plus tard). Le site n’est pas responsive, j’ai décidé de me
          concentrer uniquement sur la version desktop. Les projets qui en
          découleront ne seront jamais officiels et me serviront juste de prise
          en main et d’entrainement sur les technos.
        </p>
      </section>

      <section id="players" class="players">
        <h2 class="titleH2 players__title">Les joueurs en tendances</h2>

        <div class="players__card card">
          <span class="card__team card__information">PSG</span>
          <span class="card__number card__information">n°7</span>
          <div class="card__picture">
            <img
              src="/assets/images/players/mbappe.png"
              alt="photo officielle du joueur"
            />
          </div>
          <h3 class="card__name">Kylian Mbappe</h3>
          <span class="card__position">Attaquant</span>
          <button class="card__button">
            <a href="#">En savoir plus</a>
          </button>
        </div>

        <div class="players__card card">
          <span class="card__team card__information">Real madrid</span>
          <span class="card__number card__information">n°9</span>
          <div class="card__picture">
            <img
              src="/assets/images/players/benzema.png"
              alt="photo officielle du joueur"
            />
          </div>
          <h3 class="card__name">Karim Benzema</h3>
          <span class="card__position">Attaquant</span>
          <button class="card__button">
            <a href="#">En savoir plus</a>
          </button>
        </div>

        <div class="players__card card">
          <span class="card__team card__information">Liverpool</span>
          <span class="card__number card__information">n°4</span>
          <div class="card__picture">
            <img
              src="/assets/images/players/vandijk.png"
              alt="photo officielle du joueur"
            />
          </div>
          <h3 class="card__name">Virgil van Dijk</h3>
          <span class="card__position">Défenseur</span>
          <button class="card__button">
            <a href="#">En savoir plus</a>
          </button>
        </div>
      </section>

      <section id="teams">
        <h2 class="titleH2 teams__title">Les équipes en tendances</h2>

        <div class="teams__card card">
          <span class="card__country card__information">France</span>
          <span class="card__league card__information">Ligue 1</span>
          <div class="card__picture">
            <img src="/assets/images/teams/psg.png" alt="logo du club" />
          </div>
          <h3 class="card__name">Paris Saint Germain</h3>
          <button class="card__button">
            <a href="#">Liste des joueurs</a>
          </button>
        </div>

        <div class="teams__card card">
          <span class="card__country card__information">Espagne</span>
          <span class="card__league card__information">Liga</span>
          <div class="card__picture">
            <img src="/assets/images/teams/real.png" alt="logo du club" />
          </div>
          <h3 class="card__name">Real Madrid</h3>
          <button class="card__button">
            <a href="#">Liste des joueurs</a>
          </button>
        </div>

        <div class="teams__card card">
          <span class="card__country card__information">Angleterre</span>
          <span class="card__league card__information">Premier league</span>
          <div class="card__picture">
            <img src="/assets/images/teams/city.png" alt="logo du club" />
          </div>

          <h3 class="card__name">Paris Saint Germain</h3>
          <button class="card__button">
            <a href="#">Liste des joueurs</a>
          </button>
        </div>
      </section>

      <section id="leagues">
        <h2 class="titleH2 league__title">Les championnats en tendances</h2>
        <div class="league__card card">
          <span class="card__country card__information">France</span>
          <span class="card__coeff card__information">coeff UEFA 5 </span>
          <div class="card__picture">
            <img
              src="/assets/images/leagues/ligue1.png"
              alt="logo du championnat"
            />
          </div>
          <h3 class="card__name">Ligue 1</h3>
          <button class="card__button">
            <a href="#">Liste des joueurs</a>
          </button>
        </div>

        <div class="league__card card">
          <span class="card__country card__information">Angleterre</span>
          <span class="card__coeff card__information">coeff UEFA 1 </span>
          <div class="card__picture">
            <img
              src="/assets/images/leagues/premier_league.png"
              alt="logo du championnat"
            />
          </div>
          <h3 class="card__name">Premiere league</h3>
          <button class="card__button">
            <a href="#">Liste des joueurs</a>
          </button>
        </div>

        <div class="league__card card">
          <span class="card__country card__information">Espagne</span>
          <span class="card__coeff card__information">coeff UEFA 2 </span>
          <div class="card__picture">
            <img
              src="/assets/images/leagues/liga.png"
              alt="logo du championnat"
            />
          </div>
          <h3 class="card__name">Liga</h3>
          <button class="card__button">
            <a href="#">Liste des joueurs</a>
          </button>
        </div>
      </section>
    </div>
  );
}
export default Home;
