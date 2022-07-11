import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHerosById, heroImages } from "../helpers";

export const Heroe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hero = useMemo(() => getHerosById(id), [id]);

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={heroImages(`./${id}.jpg`)}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group listo-group-flush">
          <li className="list-group-item">
            <b>Alter Ego:</b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance:</b> {hero.first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Back
        </button>
      </div>
    </div>
  );
};
