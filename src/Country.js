import React from "react";
import styled from "styled-components";

const CountryStyled = styled.div`
  width: 264px;
  text-align: left;
  border-radius: 5px;
  margin: 1em;
  overflow: hidden;
  box-shadow: 0px 0px 7px 2px rgba(0,0,0,.03);
  img {
    width: 100%;
    object-fit: cover;
    height: 160px;
  }
  .details {
    padding: 1.5em;
  }
  h2 {
    margin: 0px;
    margin-bottom: 1rem;
    font-size: 18px;
    font-weight: 700;
  }
  p {
    font-size: 0.9em;
    margin-bottom: 0.5rem;
  }
`;

function Country({ flag, name, population, region, capital }) {
  return (
    <CountryStyled>
      <img loading="lazy" src={flag} alt="" />
      <div className="details">
        <h2>{name}</h2>
        <p>
          <b>Population: </b>
          {population}
        </p>
        <p>
          <b>Region: </b>
          {region}
        </p>
        <p>
          <b>Capital: </b>
          {capital}
        </p>
      </div>
    </CountryStyled>
  );
}

export default Country;
