import React,{useState,useEffect} from 'react';
import './App.css';
import styled from "styled-components";
import MovieComponent from './components/MovieComponent';
import Pagination from './components/Pagation';



const API_URL="https://api.themoviedb.org/3/discover/movie?api_key=f62f750b70a8ef11dad44670cfb6aa57";
const API_SEARCH="https://api.themoviedb.org/3/discover/movie?api_key=f62f750b70a8ef11dad44670cfb6aa57&query";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Head = styled.div`
width:100%;
height:40px;
background-color:#854854
`;
const Header = styled.div`
  background-color: black;
  color: white;
  margin: 0 auto;
  margin-top:40px;
  width:800px;
  align-items: center;
  padding: 10px;
  
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 6px;
  margin: 0px auto;
  width: 50%;
  background-color: white;
`;
const SearchIcon = styled.button`
  width: 32px;
  height: 32px;
`;
const MovieImage = styled.img`
  width: 48px;
  height: 48px;
  margin: 15px;
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
  justify-content: space-evenly;;
`;
const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 150px;
  opacity: 50%;
`;
function App() {

  const [movies, setMovies]=useState([]);
  const [query, setQuery]=useState('');
  const [Page, setPage]=useState('');
  const[totalResults,settotalResults]=useState("");
  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])


  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=f62f750b70a8ef11dad44670cfb6aa57&query=${query}`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      setMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
  }
   const nextPage = async(e) => {
    const url=`https://api.themoviedb.org/3/discover/movie?api_key=f62f750b70a8ef11dad44670cfb6aa57&page=${Page}`;
      const res= await fetch(url);
      const data= await res.json();
      setPage(data.Page)
    }
  
  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }
  const totalhandler= async(e)=>{
    const url=`https://api.themoviedb.org/3/discover/movie?api_key=f62f750b70a8ef11dad44670cfb6aa57&total_results=${totalResults}`;
    const res= await fetch(url);
    const data= await res.json();
    settotalResults(data.total_results);
  }
  let numberPages = Math.floor(totalResults / 20);
  return (

    <Container>
      <Head></Head>
    <Header>
      <SearchBox>
        <SearchIcon src="/react-movie-app/search-icon.svg" onClick={ searchMovie} />
        <SearchInput
          placeholder="Search Movie"
          value={query}
          onChange={changeHandler}
        />
      </SearchBox>
    </Header>
    <div>
      {movies.length > 0 ?(
        <div className="container">
        <div className="grid">
          {movies.map((movieReq)=>
          <MovieComponent key={movieReq.id} {...movieReq}/>)}
            </div>
    </div>
      ):(
        <h2>Sorry !! No Movies Found</h2>
      )}
    </div>
    
    <Pagination  pages={numberPages} nextPage={nextPage} currentPage={Page}/>    
  </Container>
   /*  <>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/home">MovieDb App</Navbar.Brand>
        <Navbar.Brand href="/home">Trending</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

          <Navbar.Collapse id="nabarScroll">
            <Nav 
            className="me-auto my-2 my-lg-3"
            style={{maxHeight:'100px'}}
            navbarScroll></Nav>

            <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
              <FormControl
              type="search"
              placeholder="Movie Search"
              className="me-2"
              aria-label="search"
              name="query"
              value={query} onChange={changeHandler}></FormControl>
              <Button variant="secondary" type="submit">Search</Button>
            </Form>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      {movies.length > 0 ?(
        <div className="container">
        <div className="grid">
          {movies.map((movieReq)=>
          <MovieBox key={movieReq.id} {...movieReq}/>)}
            </div>
    </div>
      ):(
        <h2>Sorry !! No Movies Found</h2>
      )}
    </div>   
    </> */
   
  );
}

export default App;