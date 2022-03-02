import React from 'react';
import '../styles/Content.css';
import Badge from '@mui/material/Badge';
import { img_300, unavailable } from '../config/config';
import ContentModal from './ContentModal';
export default function SingleContent({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) {
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? 'primary' : 'secondary'}
      />
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="sub-title">
        {media_type === 'tv' ? 'Tv-Series' : 'Movie'}
      </span>
      <span className="sub-title">{date}</span>
    </ContentModal>
  );
}
