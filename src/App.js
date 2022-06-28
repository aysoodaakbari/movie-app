import React,{useState,useEffect} from 'react';
import { Route } from 'react-router-dom';
import '../src/style/App.css';
import styled from "styled-components";
import MovieComponent from './components/MovieComponent';
import Pagination from './components/Pagination';




const API_URL="https://api.themoviedb.org/3/discover/movie?api_key=f62f750b70a8ef11dad44670cfb6aa57";



const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Head = styled.div`
width:100%;
height:40px;
background-color:#129600;
`;
const Header = styled.div`
  background-color:#abadaa;
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
const Searchbutton = styled.button`
position: relative;
background-color: #0a56c7;
border-radius: 4em;
font-size: 16px;
color: white;
padding: 0.8em 1.8em;
cursor:pointer;
user-select:none;
text-align: center;
text-decoration: none;
border: none;
cursor: pointer;
transition-duration: 0.4s;
-webkit-transition-duration: 0.4s;
&:hover
{
  transition-duration: 0.1s;
  background-color:#455c80;
}
&:after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 4em;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.5s;
  box-shadow: 0 0 10px 40px white;
}
&:active:after {
  box-shadow: 0 0 0 0 white;
  position: absolute;
  border-radius: 4em;
  left: 0;
  top:0;
  opacity: 1;
  transition: 0s;
}
`;

const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
  
`;
function App() {

  const [movies, setMovies]=useState([]);
  const [query, setQuery]=useState('');
  const[perpage]=useState(20);
  const[currentPage,setcurrentPage]=useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
      setLoading(true);
    })
  }, [])


  const searchMovie = async(e)=>{
    e.preventDefault();
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=f62f750b70a8ef11dad44670cfb6aa57`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      setMovies(data.results);
      // console.log(currentPage);
      
      setcurrentPage(currentPage);
      
    }
    catch(e){
      console.log(e);
    }
  }
const lastmovie=currentPage*perpage;
const firstmovie=lastmovie-perpage;
const currentmovie=movies.slice(firstmovie,lastmovie);
//console.log(currentmovie);

 

  
  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }

  return (
    <Container>
  
   
      <Head></Head><Header>
            <SearchBox>
              <Searchbutton src="/react-movie-app/search-icon.svg" onClick={searchMovie} >Search</Searchbutton>
              <SearchInput
                placeholder="Search Movie"
                value={query}
                onChange={changeHandler} />
            </SearchBox>
            </Header>
    <div>
  
                
  
      {movies.length > 0 ?(
        <div className="container">
          <div className='grid'>
            
          {movies.map((movieReq)=>
          <MovieComponent key={movieReq.id} {...movieReq}/>)}
          </div>
          
    </div>
  
      ):(
        <h2>Sorry !! No Movies Found</h2>
      )}
    </div>
    <Pagination perpage={perpage} totalpost={movies.length} paginate={(pagenumber)=>setcurrentPage(pagenumber)}></Pagination>
         
    

    
    
   
    
 
  </Container>
   
  );
}

export default App;