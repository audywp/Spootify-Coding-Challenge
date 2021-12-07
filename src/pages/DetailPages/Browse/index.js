/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CoreLayout from '../../../common/layouts/CoreLayout';
import { Loading } from '../../../common/layouts/SkeletonLoading';

import DiscoverBlock from '../../Discover/components/DiscoverBlock/components/DiscoverBlock';
import { getDetail } from '../redux/action';

export default function Browse() {
  const dispatch = useDispatch();

  const { id, type } = useSelector((state) => state.Detail.selectedDetail);
  const detail = useSelector((state) => state.Detail.detail);
  const loading = useSelector((state) => state.Global.loading);

  useEffect(() => {
    dispatch(getDetail(id, type));
  }, []);

  if (type === 'artists') {
    return (
      <CoreLayout headers>
        {!loading && detail.items ? (
          <Box>
            <DiscoverBlock
              type='albums'
              contentType='column'
              text='FEATURED PLAYLISTS'
              id='playlists'
              data={detail.items}
            />
          </Box>
        ) : (
          <Loading.BaseLoading />
        )}
      </CoreLayout>
    );
  } else {
    return (
      <CoreLayout headers>
        {!loading && detail.playlists ? (
          <Box>
            <DiscoverBlock
              type='playlists'
              contentType='column'
              text='FEATURED PLAYLISTS'
              id='playlists'
              data={detail.playlists.items}
            />
          </Box>
        ) : (
          <Loading.BaseLoading />
        )}
      </CoreLayout>
    );
  }
}
