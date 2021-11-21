import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStepForward,
  faPlayCircle,
  faStepBackward,
  faEllipsisH,
  faPauseCircle,
  faVolumeMute,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faRandom } from '@fortawesome/free-solid-svg-icons';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faVolumeDown } from '@fortawesome/free-solid-svg-icons';
import './_player.scss';
import { useAudio } from '../../../helpers/audioPlayer';
import { useSelector } from 'react-redux';
import { millisToMinutesAndSeconds } from '../../../helpers/timeConverter';
import { Box } from '@mui/system';
import { Slider } from '@mui/material';
export default function Player() {
  const {
    preview_url,
    popularity,
    name,
    album = [],
    artists = [],
    duration_ms,
  } = useSelector((state) => state.Global.playedSong);
  const isPlaying = useSelector((state) => state.Global.isPlaying);
  const duration = useSelector((state) => state.Global.duration);

  const [toggle, changeSong, isMuted, muted] = useAudio(preview_url);

  console.log(100 - duration / 300, 'ini duration');

  return (
    <div className='player'>
      <div className='player__album'>
        <span
          style={{
            backgroundImage: `url(${album?.images?.length ? album.images[0].url : null})`,
            backgroundSize: 'contain',
          }}
        />
        <p>{name ? name : "Nothing's playing"}</p>
      </div>
      <div className='player__controls'>
        <FontAwesomeIcon icon={faStepBackward} />
        <FontAwesomeIcon onClick={toggle} icon={isPlaying ? faPauseCircle : faPlayCircle} />
        <FontAwesomeIcon icon={faStepForward} />
      </div>

      <div className='player__seekbar'>
        <Slider aria-label='Volume' value={100 - duration / 300} size='medium' />
      </div>

      <Box mr={4}>
        <span>{millisToMinutesAndSeconds(duration)}</span>
      </Box>
      <div className='player__actions'>
        {/* <FontAwesomeIcon icon={faEllipsisH} /> */}
        {/* <FontAwesomeIcon icon={faHeart} /> */}
        {/* <FontAwesomeIcon icon={faRandom} /> */}
        {/* <FontAwesomeIcon icon={faRetweet} /> */}
        {/* <FontAwesomeIcon onClick={() => muted()} icon={isMuted ? faVolumeMute : faVolumeDown} /> */}
      </div>
    </div>
  );
}
