import React from 'react';
import Discover from '../pages/Discover';
import Search from '../pages/Search';
import Favourites from '../pages/Favourites';
import Playlists from '../pages/Playlists';
import Charts from '../pages/Charts';

export const routes = [
  {
    path: '/',
    element: <Discover />,
    child: [],
  },
  {
    path: '/search',
    element: <Search />,
    child: [],
  },
  {
    path: '/favourites',
    element: <Favourites />,
    child: [],
  },
  {
    path: '/Playlists',
    element: <Playlists />,
    child: [],
  },

  {
    path: '/charts',
    element: <Charts />,
    child: [],
  },
];
