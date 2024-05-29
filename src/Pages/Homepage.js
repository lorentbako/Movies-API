import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import parse from "html-react-parser";

import "./Styles/Hompage.scss";
import styles from "./Styles/SearchBar.module.css";

const Homepage = () => {
  //Set State
  const [search, setSearch] = useState("Marvel");
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(movies);

  let categories = movies.reduce((acc, movie) => {
    movie.show.genres.forEach((genre) => {
      if (!acc.includes(genre)) {
        acc.push(genre);
      }
    });
    return acc;
  }, []);

  //Set the search value
  const getApiData = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `http://api.tvmaze.com/search/shows?q="${search}`
    ).then((response) => response.json());
    setMovies(response);
    setFilteredMovies(response);
  };

  const filterByCategories = (event) => {
    const selectedCategory = event.target.value;
    if (selectedCategory === "all") {
      setFilteredMovies(movies);
      return;
    }
    const filtered = movies.filter((movie) =>
      movie.show.genres.includes(selectedCategory)
    );
    setFilteredMovies(filtered);
  };

  return (
    <>
      <div className={styles.form}>
        <form onSubmit={getApiData}>
          <input
            className={styles.searchInput}
            id="search"
            name="search"
            placeholder="Enter name of a TV-Show"
            type="text"
            onChange={(event) => setSearch(event.target.value)}
            value={search}
          />
          <button className={styles.searchButton} type="submit">
            Search
          </button>
        </form>
        <br/>
        <p style={{margin:0}}>Filter by Category:</p>
        <select onChange={filterByCategories} className={styles.categoriesList}>
          <option value={"all"}>All Movies</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="row">
        {filteredMovies &&
          filteredMovies.map((movie) => (
            <Card className="card">
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>{movie.show.name}</Card.Title>
                <Card.Text className="summary">
                 <i> Categories: </i><b>{movie.show.genres.join(", ")}</b>
                  <br />
                  {parse(movie.show.summary)}
                </Card.Text>
                <Button variant="primary" href={movie.show.url}>
                  Go To: {movie.show.name}
                </Button>
              </Card.Body>
            </Card>
          ))}
      </div>
    </>
  );
};

export default Homepage;
