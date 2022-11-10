function Leagues() {
  return (
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

      <div class="league__card card">
        <span class="card__country card__information">Italie</span>
        <span class="card__coeff card__information">coeff UEFA 3 </span>
        <div class="card__picture">
          <img
            src="/assets/images/leagues/seriea.png"
            alt="logo du championnat"
          />
        </div>
        <h3 class="card__name">Premiere league</h3>
        <button class="card__button">
          <a href="#">Liste des joueurs</a>
        </button>
      </div>

      <div class="league__card card">
        <span class="card__country card__information">Bundesliga</span>
        <span class="card__coeff card__information">coeff UEFA 4 </span>
        <div class="card__picture">
          <img
            src="/assets/images/leagues/bundesliga.png"
            alt="logo du championnat"
          />
        </div>
        <h3 class="card__name">Liga</h3>
        <button class="card__button">
          <a href="#">Liste des joueurs</a>
        </button>
      </div>
    </section>
  );
}

export default Leagues;
