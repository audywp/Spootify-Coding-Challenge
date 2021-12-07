/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableComponent from '../../common/components/Table/Table';
import TablePlaylists from '../../common/components/Table/TablePlaylists';
import CoreLayout from '../../common/layouts/CoreLayout';
import { Loading } from '../../common/layouts/SkeletonLoading';
import { playSong } from '../../store/globalAction';
import DiscoverBlock from '../Discover/components/DiscoverBlock/components/DiscoverBlock';
import { getDetail } from './redux/action';

export default function DetailPages() {
  const params = new URLSearchParams(window.location.search);

  const type = params.get('type');
  const column =
    type === 'albums'
      ? [
          { title: '#Title', keyObject: 'name' },
          { title: 'Artist', keyObject: 'artists' },
          { title: 'Duration', keyObject: 'duration_ms' },
        ]
      : [
          { title: 'Album', keyObject: 'album' },
          { title: '#Title', keyObject: 'name' },
          { title: 'Duration', keyObject: 'duration_ms' },
        ];

  const detail = useSelector((state) => state.Detail.detail);
  const { id } = useSelector((state) => state.Detail.selectedDetail);
  const loading = useSelector((state) => state.Global.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(id, type));
  }, []);

  const savePlayedSong = (data, index) => {
    dispatch(playSong({ ...data, index }));
  };

  return (
    <CoreLayout headers>
      {!loading && detail.tracks ? (
        <>
          {type === 'categories' ? (
            <DiscoverBlock type='playlists' text='FEATURED PLAYLISTS' id='playlists' data={detail.playlists.items} />
          ) : (
            <Box>
              {type === 'playlists' ? (
                <TablePlaylists column={column} data={detail.tracks.items} onClick={savePlayedSong} />
              ) : (
                <TableComponent column={column} data={detail.tracks.items} onClick={savePlayedSong} />
              )}
            </Box>
          )}
        </>
      ) : (
        <Loading.BaseLoading />
      )}
    </CoreLayout>
  );
}
