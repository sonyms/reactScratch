import React, { useEffect } from "react";
// bb900aa9
const App = () => {


    const movie = {
        "Title": "Batman Begins",
        "Year": "2005",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    };
  
    function sum(...num) {
       let total = 0; 
       num.map((n) => { total+=n; });
       return total;
    }


    const movies = async () => {

             
        const numbers = [5, 2, 3, 5];
      
        console.log(sum(...numbers));

        const movie = await fetch("https://www.omdbapi.com/?s=Batman&apikey=bb900aa9");

        const response = await movie.json();

        //console.log(response.Search);
    }

    useEffect(()=>{
        
        movies();
        

    },[]);

    return (
        <>
        <div>Hi</div>
        <div>{movie.Title}</div>
        <div>{movie.Year}</div>
        <div><img src={movie.Poster} alt={movie.Title} /></div>
        </>
    );

}

export default App;