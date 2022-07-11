import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "../../shared/hooks/useForm";
import queryString from "query-string";
import { getHerosByName } from "../helpers";
import { HeroeCard } from "../components/HeroeCard";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const heroes = getHerosByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onsearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  };
  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onsearchSubmit}>
            <input
              type="text"
              placeholder="Search Hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-2"> Search </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {heroes.map((hero) => (
            <HeroeCard key={hero.id} {...hero} />
          ))}
          <div
            className="alert alert-primary"
            style={{ display: showSearch ? "block" : "none" }}
          >
            Search Hero
          </div>

          <div
            className="alert alert-danger"
            style={{ display: showError ? "" : "none" }}
          >
            No exist Hero with {q}
          </div>
        </div>
      </div>
    </>
  );
};
