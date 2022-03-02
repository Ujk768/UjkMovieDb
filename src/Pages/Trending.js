import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Trending.css';
import SingleContent from '../component/SingleContent';
import PageNumbers from '../component/PageNumbers';
export default function Trending() {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const fetchTrending = async () => {
    // api_key=182b3660472f9b0edd826ea70f433b3c
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=182b3660472f9b0edd826ea70f433b3c&page=${page}`
    );

    setContent(data.results);
  };
  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <div>
      <span className="page-title">Trending</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <PageNumbers setPage={setPage} />
    </div>
  );
}
