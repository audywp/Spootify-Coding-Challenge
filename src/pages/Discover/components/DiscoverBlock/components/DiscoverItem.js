import React from 'react';
import '../styles/_discover-item.scss';
import avatar from '../../../../../assets/images/avatar.svg';

export default function DiscoverItem({ images, name, onClick = () => {} }) {
  return (
    <div onClick={onClick} className='discover-item animate__animated animate__fadeIn'>
      <div
        className='discover-item__art'
        style={{ backgroundImage: images.length ? `url(${images[0].url})` : `url(${avatar})` }}
      />
      <p className='discover-item__title'>{name}</p>
    </div>
  );
}
