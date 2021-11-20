import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphonesAlt, faHeart, faPlayCircle, faSearch, faStream } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Avatar } from '../../../assets/images/avatar.svg';
import './_sidebar.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSidebar } from '../../../store/globalAction';

function RenderSideBarOption(link, icon, text, { selected } = {}, callback = () => {}) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(link);
        callback();
      }}
      className={cx('sidebar__option', { 'sidebar__option--selected': selected })}
    >
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </div>
  );
}

export default function SideBar() {
  const dispatch = useDispatch();
  const sideBar = useSelector((state) => state.Global.sidebar);

  const updateSelected = (ind) => {
    dispatch(setSelectedSidebar(ind));
  };

  return (
    <div className='sidebar'>
      <div className='sidebar__profile'>
        <Avatar />
        <p>Bob Smith</p>
      </div>
      <div className='sidebar__options'>
        {sideBar.map((val, ind) => {
          return RenderSideBarOption(val.path, val.icon, val.name, val.isSelected, () => updateSelected(ind));
        })}
      </div>
    </div>
  );
}
