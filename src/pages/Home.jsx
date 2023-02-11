import { fetchTrendingFilms } from "API/Api";
import { Section } from "components/Section/Section";
import { useEffect, useState } from "react";


export default function Home() {
    const [trendingFilms, setTrendingFilms] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        const controller = new AbortController();
        const getTrendingFilms = async () =>  {
            try {
                setIsLoading(true)
                const arrFilms = await fetchTrendingFilms('day', controller.signal)
                setTrendingFilms(arrFilms.results)
            } catch(error) {
                console.log(error)
            }  finally {
                setIsLoading(false)
            }
         }
         getTrendingFilms()
         
         return () => controller.abort()
    }, [])




    return(
        <Section films={trendingFilms} loading={isLoading}></Section>
    )
}