import axios from 'axios';
import React, { useEffect } from 'react';
import Chip from '@mui/material/Chip';
export default function Genres({
  type,
  selectedgenres,
  genres,
  setgenres,
  setSelectedgenres,
  setPage,
}) {
  const handleAdd = (genre) => {
    setSelectedgenres([...selectedgenres, genre]);
    setgenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };
  const handleRemove = (genre) => {
    setSelectedgenres(
      selectedgenres.filter((selected) => selected.id !== genre.id)
    );
    setgenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=182b3660472f9b0edd826ea70f433b3c&language=en-US`
    );

    setgenres(data.genres);
  };
  useEffect(() => {
    fetchGenres();
    //un mounting if chip is cancelled
    return () => {
      setgenres({});
    };
  }, []);
  return (
    <div>
      {selectedgenres &&
        selectedgenres.map((genre) => (
          <Chip
            clickable
            size="small"
            color="primary"
            label={genre.name}
            key={genre.id}
            style={{ margin: 2 }}
            onDelete={() => handleRemove(genre)}
          />
        ))}
      {genres &&
        genres.map((genre) => (
          <Chip
            clickable
            size="small"
            label={genre.name}
            key={genre.id}
            onClick={() => handleAdd(genre)}
            style={{ margin: 2, color: '#ffff' }}
          />
        ))}
    </div>
  );
}
