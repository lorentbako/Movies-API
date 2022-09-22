import React from "react";
import { Carousel } from "react-bootstrap";

import gone from "./Images/gone.webp";
import interstellar from "./Images/interstellar.jpeg";
import psycho from "./Images/psycho.jpg";

const Services = (props) => {
  const movies = [
    {
      name: "Gone Girl",
      description:
        "Nick Dunne discovers that the entire media focus has shifted on him when his wife, Amy Dunne, mysteriously disappears on the day of their fifth wedding anniversary.",
      img: gone,
    },
    {
      name: "Psycho",
      description:
        "Marion disappears after stealing money from her employer. Her lover and sister try to find her and end up reaching the infamous Bates Motel, where they meet Norman Bates.",
      img: psycho,
    },
    {
      name: "Interstellar",
      description:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      img: interstellar,
    },
  ];

  return (
    <>
      <Carousel style={{ margin: "20px 200px" }}>
        {movies.map((movie) => (
          <Carousel.Item>
            <img className="d-block w-100" src={movie.img} alt={movie.name} />
            <Carousel.Caption>
              <h3>{movie.name}</h3>
              <p>{movie.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default Services;
