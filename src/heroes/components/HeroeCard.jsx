import { Link } from "react-router-dom";
import { heroImages } from "../helpers";

export const HeroeCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="card">
      <div className="row no-gutters">
        <div className="col-4">
          <img
            src={heroImages(`./${id}.jpg`)}
            className="card-img"
            alt={superhero}
          />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">{alter_ego}</p>
            {alter_ego !== characters && (
              <p className="card-text">{characters}</p>
            )}

            <p className="card-text ">
              <small className="text-muted">{first_appearance}</small>
            </p>

            <Link to={`/heroe/${id}`}> Ver màs... </Link>
          </div>
        </div>
      </div>
    </div>
  );
};