import { Loader } from "components/Loader/Loader"
import { MovieList } from "components/MovieList/MovieList"
import { SectionContainer, Title } from "./Section.styled"

export const Section = ({films, loading }) => {
    return (
        <SectionContainer>
            {loading ? <Loader/> : <MovieList films={films}>
                <Title>Trending today:</Title>
        </MovieList>}
        </SectionContainer>
    )
}