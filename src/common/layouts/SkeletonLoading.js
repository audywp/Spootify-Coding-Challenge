import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function SkeletonLoading() {
  return (
    <>
      <div style={{ marginBottom: 40, marginLeft: 20 }}>
        <Skeleton style={{ height: 6 }} />
      </div>
      <div className='main__content__center' style={{ marginLeft: 20, marginBottom: 100 }}>
        <Skeleton style={{ maxWidth: '150px', width: 150 }} className='discover-item__art' />
        <Skeleton style={{ maxWidth: '150px', width: 150 }} className='discover-item__art' />
        <Skeleton style={{ maxWidth: '150px', width: 150 }} className='discover-item__art' />
        <Skeleton style={{ maxWidth: '150px', width: 150 }} className='discover-item__art' />
        <Skeleton style={{ maxWidth: '150px', width: 150 }} className='discover-item__art' />
        <Skeleton style={{ maxWidth: '150px', width: 150 }} className='discover-item__art' />
      </div>
    </>
  );
}

export const Loading = {
  BaseLoading: SkeletonLoading,
};
