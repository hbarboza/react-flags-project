import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Country from "./Country";
import { useSelector, useDispatch } from "react-redux";

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  background: var(--background);
  padding: 4em 2em;
  justify-content: center;
`;

function CountryList() {
  const dispatch = useDispatch()
  const countryList = useSelector((state) => state.countryList) 
  //console.log('el stado ' state)
  //const [countryList, setCountryList] = useState([]);


  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then(response => {
        return response.json();
      })
      .then((list) => {
        // setCountryList(data);
        dispatch({
          type: 'SET_COUNTRY_LIST',
          payload: list 
        })
        console.log(list.lenght);
      })
      .catch(() => {
        console.log("hubo un error");
      });
  }, []);

  return (
    <CountryListStyled>
      {countryList.map(({ name, flag, population, region, capital }) => {
        return (
          <Country
            key={name}
            name={name}
            capital={capital}
            flag={flag}
            population={population}
            region={region}
          />
        );
      })}
    </CountryListStyled>
  );
}

export default CountryList;
