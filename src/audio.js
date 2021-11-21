import React, { useRef } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AudioRef } from './helpers/audioPlayer';
import { setIsPlaying } from './store/globalAction';

const Audio = () => {
  const dispatch = useDispatch();
  const { preview_url } = useSelector((state) => state.Global.playedSong);
  const isPlaying = useSelector((state) => state.Global.isPlaying);
  return (
    <ReactAudioPlayer
      ref={AudioRef}
      onEnded={() => {
        console.log('hallo ');
        dispatch(setIsPlaying(false));
      }}
      autoPlay={isPlaying}
      src={preview_url}
    />
  );
};

export default Audio;
