import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AudioRef } from './helpers/audioPlayer';
import { setIsPlaying, setDuration } from './store/globalAction';
const newVariable = 'asd';

const Audio = () => {
  const dispatch = useDispatch();
  const { preview_url } = useSelector((state) => state.Global.playedSong);
  const isPlaying = useSelector((state) => state.Global.isPlaying);
  const duration = useSelector((state) => state.Global.duration);

  console.log(duration);
  return (
    <ReactAudioPlayer
      ref={AudioRef}
      onEnded={() => {
        dispatch(setIsPlaying(false));
      }}
      listenInterval={1000}
      onAbort={() => {
        dispatch(setDuration(30000));
      }}
      onListen={(time) => {
        dispatch(setDuration(duration - 1000));
      }}
      autoPlay={isPlaying}
      src={preview_url}
    />
  );
};

export default Audio;
