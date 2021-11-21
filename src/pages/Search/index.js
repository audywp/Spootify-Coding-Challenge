import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CoreLayout from '../../common/layouts/CoreLayout';
import { Loading } from '../../common/layouts/SkeletonLoading';
import DiscoverBlock from '../Discover/components/DiscoverBlock/components/DiscoverBlock';
import { getCategories } from '../Discover/redux/action';
import { searchSongs, setSearchSongs } from './redux/action';

import Table from '../../common/components/Table/Table';
import SearchInput from './Component/SearchInput';
import { playSong } from '../../store/globalAction';

export default function SearchContent() {
  const dispatch = useDispatch();
  const Discover = useSelector((state) => state.Discover);
  const Search = useSelector((state) => state.Search.search);
  const loading = useSelector((state) => state.Global.loading);

  useEffect(() => {
    dispatch(getCategories(50));

    return () => dispatch(setSearchSongs({ artists: { items: [] }, tracks: { items: [] } }));
  }, []);

  const savePlayedSong = (data) => {
    dispatch(playSong(data));
  };

  return (
    <CoreLayout>
      <SearchInput onChange={(e) => dispatch(searchSongs(e.target.value))} />
      {Discover.categoriesLoading || loading ? (
        <>
          <Loading.BaseLoading />
        </>
      ) : (
        <>
          {Search.artists.items.length || Search.tracks.items.length ? (
            <>
              {/* <DiscoverBlock text='Tracks' id='Tracks' data={Search.artists.items} /> */}
              <Table
                column={[
                  { title: 'Album', keyObject: 'album' },
                  { title: '#Title', keyObject: 'name' },
                  { title: 'Popularity', keyObject: 'popularity' },
                  { title: 'Artist', keyObject: 'artists' },
                  { title: 'Duration', keyObject: 'duration_ms' },
                ]}
                data={Search.tracks.items}
                onClick={savePlayedSong}
              />
              <DiscoverBlock type='artists' text='Artists' id='artists' data={Search.artists.items} />
            </>
          ) : (
            <DiscoverBlock
              text='BROWSE'
              type='categories'
              id='browse'
              data={Discover.categories.categories.items}
              imagesKey='icons'
              contentType='column'
            />
          )}
        </>
      )}
    </CoreLayout>
  );
}
