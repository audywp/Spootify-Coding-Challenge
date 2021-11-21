import React from 'react';
import Discover from '../pages/Discover';
import Search from '../pages/Search';
import Favourites from '../pages/Favourites';
import Playlists from '../pages/Playlists';
import Charts from '../pages/Charts';
import Redirect from '../common/components/Redirect/Redirect';
import DetailPages from '../pages/DetailPages';
import Browse from '../pages/DetailPages/Browse';

export const routes = [
  {
    path: '/',
    element: <Discover />,
    child: [],
  },
  {
    path: 'detail',
    element: <DetailPages />,
    child: [],
  },
  {
    path: 'browse',
    element: <Browse />,
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
  {
    path: '/redirect',
    element: <Redirect />,
    child: [],
  },
];
