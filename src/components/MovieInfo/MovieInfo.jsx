import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AdditionalInfoLink, AdditionalInfoLinkWrap, ContainerInfo, ContainerMainInfo, ContaiterAdditionalInfo, Image, MainInfoRightSide, Subtitle, Text, TextWrap, Title, UserScore } from './MovieInfo.styled';

export const MovieInfo = ({ movieDetails }) => {
  const {
    poster_path,
    original_title,
    release_date,
    overview,
    genres,
    vote_average,
  } = movieDetails;

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://bflix.biz/no-poster.png';
  const releaseYear = release_date?.slice(0, 4);
  const userScore = Math.round(vote_average * 10);
  const genresString = genres?.map(({ name }) => name).join(', ');

  return (
    <>
      {movieDetails && (
        <ContainerInfo>
          <ContainerMainInfo>
          <Image src={poster} alt="" />
          <MainInfoRightSide>
            <Title>
              {original_title} {releaseYear ? `(${releaseYear})` : ''}
            </Title>
            {userScore !== 0 && <UserScore><span>User Score:</span>{userScore}%</UserScore>}
            {overview && (
              <TextWrap>
                <Subtitle>Overview</Subtitle>
                <Text>{overview}</Text>
              </TextWrap>
            )}
            {genresString && (
              <div>
                <Subtitle>Ganres</Subtitle>
                <Text>{genresString}</Text>
              </div>
            )}
          </MainInfoRightSide>
          </ContainerMainInfo>
          <ContaiterAdditionalInfo>
            <AdditionalInfoLinkWrap>
            <AdditionalInfoLink to="cast">Cast</AdditionalInfoLink>
            <AdditionalInfoLink to="reviews">Reviews</AdditionalInfoLink>
            </AdditionalInfoLinkWrap>
            <Suspense fallback={<div>Loading page...</div>}>
              <Outlet />
            </Suspense>
          </ContaiterAdditionalInfo>
          
        </ContainerInfo>
      )}
    </>
  );
};
