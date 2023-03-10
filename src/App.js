import { useEffect, useState } from "react";
import './App.css'
import searchIcon from './search.svg'
import MovieCard from './MovieCard'
const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
     
    const [movies, setMovies] = useState([])
    const [searchTerm,setSearchTerm]=useState('')

    const searchMovies =async (title) => {
    // const response = await fetch(`${API_URL}&s=${title}`)
    //     const data = await response.json()
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=4d4ed145d3584846f5922b6a467e1f85&query=${title}`)
        const dta = await res.json();
        setMovies(dta.results)

}

    useEffect(() => {
    searchMovies('batman')
},[])
    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                    placeholder="search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyUp={(e) => { if (e.keyCode === 13) searchMovies(searchTerm) }}
                />
                <img
                    src={searchIcon}
                    alt="search"
                    onClick={()=>searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length > 0 ?
                    (<div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} key={movie.id} />
                        ))}
                    </div>) :
                    (
                        <div className="empty">
                            <h2>No movies found!</h2>
                         </div>
                    )
            }
            
        </div>
    )
}

export default App