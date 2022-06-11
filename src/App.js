import { useState } from "react";
import styled from "styled-components";
import MovieComponent from "./components/MovieComponent";
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Head =styled.div`
width:100%;
height:30px;
background-color:#00ba25;
`;
const Header = styled.div`
background-color:#919191;
color: white;
margin-left: auto;
margin-right: auto;
margin-top: 40px;
align-items: center;
padding: 10px;
width:1000px;

`;
const SearchBox = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 10px;
  border-radius: 6px;
  width: 50%;
  background-color: white;
`;
const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;
const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`;
const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;
  `;
function App() {

  return (
    <Container>
        <Head></Head>
    <Header> <SearchBox>
          <SearchIcon src=" " />
          <SearchInput
            placeholder="Search Movie"
           
          />
        </SearchBox>
    </Header>
    <MovieListContainer></MovieListContainer>
    </Container>
  );
}

export default App;
