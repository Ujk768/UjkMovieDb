import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SingleContent from '../component/SingleContent';
import PageNumbers from '../component/PageNumbers';
import Genres from '../component/Genres';
import useGenres from '../Hooks/useGenres';

export default function Movies() {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [selectedgenres, setSelectedgenres] = useState([]);
  const [genres, setgenres] = useState([]);

  const genreforURL = useGenres(selectedgenres);
  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=182b3660472f9b0edd826ea70f433b3c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}&with_watch_monetization_types=flatrate`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchMovies();
  }, [page, genreforURL]);

  return (
    <div>
      <span className="page-title"> Movies</span>
      <Genres
        type={'movie'}
        selectedgenres={selectedgenres}
        genres={genres}
        setgenres={setgenres}
        setSelectedgenres={setSelectedgenres}
        setPage={setPage}
      />
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="movie"
              vote_average={c.vote_average}
            />
          ))}
      </div>
      {numOfPages > 1 && (
        <PageNumbers setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
}
