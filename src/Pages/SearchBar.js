import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./Styles/Form.scss";
import {useState} from 'react';
const SearchBar = () => {
    const [search, setSearch] = useState("marvel");

    const handleSubmit = event => {
        event.preventDefault(); 
        setSearch(search);
      };
  return (
    <div className="form">
      <InputGroup className="mb-3" onSubmit={handleSubmit}>
        <Form.Control
          placeholder="Enter a TV-Show"
          aria-label="Enter a TV-Show"
          aria-describedby="basic-addon2"
          value={search}
          onChange={event => setSearch(event.target.value)}
        />
        <Button variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
