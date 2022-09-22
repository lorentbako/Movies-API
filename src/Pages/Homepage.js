import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Styles/Hompage.scss";

const Homepage = () => {
  const [movies, setMovies] = useState("");

  const getApiData = async () => {
    const response = await fetch(
      "http://api.tvmaze.com/search/shows?q=marvel"
    ).then((response) => response.json());

    setMovies(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="row">
      {movies &&
        movies.map((movie) => (
          <Card className="card">
            <Card.Img variant="top" src=""/>
            <Card.Body>
              <Card.Title>{movie.show.name}</Card.Title>
              <Card.Text className="summary">
                {movie.show.summary}
                <br />
                {movie.show.genres[1] ? movie.show.genres[1] : ""}
              </Card.Text>
              <Button variant="primary" href={movie.show.url}>Go To: {movie.show.name}</Button>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default Homepage;
