import { fetchTrendingFilms } from "API/Api";
import { TrendingFilmsList } from "components/TrendingFilmsList/TrendingFilmsList";
import { useEffect, useState } from "react";

export const Home = () => {
    const [trendingFilms, setTrendingFilms] = useState(null)

    useEffect(() => {
        const getTrendingFilms = async () =>  {
            try {
                const arrFilms = await fetchTrendingFilms('day')
                setTrendingFilms(arrFilms.results)
            } catch(error) {
                console.log(error)
            }  
         }
         getTrendingFilms()
    }, [])




    return(
    <>
    <h1>Hello world</h1>
    {trendingFilms && <TrendingFilmsList films={trendingFilms}/>}
    </>
    )
}