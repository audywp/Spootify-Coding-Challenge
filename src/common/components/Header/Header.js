import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Hero } from '../../../assets/images/hero.svg';
import './_header.scss';
import { Avatar } from '@mui/material';

export default function Header({ header = true, data = { images: [{ url: '' }] } }) {
  console.log(data, 'Data');
  return (
    <div className={header ? 'header__active' : 'header__disabled'}>
      {header ? (
        <Hero />
      ) : (
        <Avatar variant='square' alt={data.name} src={data.images[0].url} sx={{ height: '12vw', width: '12vw' }} />
      )}
      <div>
        <h1>{header ? 'Your favourite tunes' : data.name}</h1>
        <h2>
          {header ? (
            <>
              All <FontAwesomeIcon icon={faSun} /> and all <FontAwesomeIcon icon={faMoon} />
            </>
          ) : (
            data.label
          )}
        </h2>
      </div>
    </div>
  );
}
