import React, { useEffect, useState, createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsPlaying } from '../store/globalAction';

export const AudioRef = createRef();

export const useAudio = (url) => {
  const isPlaying = useSelector((state) => state.Global.isPlaying);
  const { preview_url } = useSelector((state) => state.Global.playedSong);
  const dispatch = useDispatch();
  const [audio, setAudio] = useState(new Audio(preview_url));
  const [isMuted, setIsmuted] = useState(false);

  const toggle = () => {
    if (isPlaying) {
      AudioRef.current.audioEl.current.pause();
    } else {
      AudioRef.current.audioEl.current.play();
    }

    dispatch(setIsPlaying(!isPlaying));
  };

  const muted = () => {
    if (isMuted) AudioRef.current.audioEl.current.volume = 1;
    else AudioRef.current.audioEl.current.volume = 0;

    setIsmuted(!isMuted);
  };

  const changeSong = async () => {
    dispatch(setIsPlaying(true));
    AudioRef.current.audioEl.current.play();
  };

  useEffect(() => {
    audio.addEventListener('ended', () => dispatch(setIsPlaying(false)));
    return () => {
      audio.removeEventListener('ended', () => dispatch(setIsPlaying(false)));
    };
  }, []);

  return [toggle, changeSong, isMuted, muted];
};
