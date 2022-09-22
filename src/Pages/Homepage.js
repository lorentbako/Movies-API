import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Styles/Hompage.scss";
import "./Styles/Form.scss";

const Homepage = () => {
  //Set State
  const [search, setSearch] = useState("Marvel");
  const [movies, setMovies] = useState("");
  const [holdSearchValue,getSearch] = useState("");

  //Set the search value 
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(holdSearchValue);
  };

  //Get the API Data
  const getApiData = async () => {
    const response = await fetch(
      `http://api.tvmaze.com/search/shows?q="${search}`
    ).then((response) => response.json());
    setMovies(response);
  };

  useEffect(() => {
     getApiData()
  });

  return (
    <>
      <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          id="search"
          name="search"
          placeholder="Enter name of a TV-Show"
          type="text"
          onChange={event => getSearch(event.target.value)}
          value={holdSearchValue}
        />
        <button type="submit">Search</button>
      </form>
      </div>
      <div className="row">
        {movies &&
          movies.map((movie) => (
            <Card className="card">
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>{movie.show.name}</Card.Title>
                <Card.Text className="summary">
                  <b>{movie.show.genres[1] ? movie.show.genres[1] : ""}</b>
                  <br />
                  {movie.show.summary}
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
