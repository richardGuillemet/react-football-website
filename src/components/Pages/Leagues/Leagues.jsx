import { useState, useEffect } from "react";

function Leagues() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [leagues, setLeagues] = useState([]);

  const url = "http://127.0.0.1:8000/api/championnats";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setLeagues(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  console.log({ leagues });

  return (
    <section id="leagues">
      <h2 class="titleH2 league__title">Les championnats en tendances</h2>

      {leagues.map((league) => (
        <div class="league__card card">
          <span class="card__country card__information">{league.pays}</span>
          <span class="card__coeff card__information">
            coeff UEFA {league.indice_uefa}
          </span>
          <div class="card__picture">
            <img src={`/assets/images/leagues/${league.logo}`} />
          </div>
          <h3 class="card__name">{league.nom}</h3>
          <button class="card__button">
            <a href="#">Liste des joueurs</a>
          </button>
        </div>
      ))}
    </section>
  );
}

export default Leagues;
