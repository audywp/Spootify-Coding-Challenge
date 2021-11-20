import React from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AvatarMUI from '@mui/material/Avatar';
import { ReactComponent as Avatar } from '../../../assets/images/avatar.svg';
import './_sidebar.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, setSelectedSidebar } from '../../../store/globalAction';

function stringToColor(string = '') {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name = '') {
  if (name.includes(' ')) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  } else {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}`,
    };
  }
}

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
  const userProfile = useSelector((state) => state.Global.userProfile);
  const isLogged = useSelector((state) => state.Global.isLogged);
  const { display_name = 'Guest', images = [] } = userProfile;

  const updateSelected = (ind) => {
    dispatch(setSelectedSidebar(ind));
  };

  const signOut = () => {
    dispatch(logout());
  };

  return (
    <div className='sidebar'>
      <div className='sidebar__profile'>
        {images.length ? (
          <AvatarMUI alt={display_name} src={images[0].url} sx={{ width: 80, height: 80 }} />
        ) : isLogged ? (
          <AvatarMUI {...stringAvatar(display_name)} />
        ) : (
          <Avatar />
        )}
        <p style={{ textTransform: 'capitalize' }}>{isLogged ? display_name : null}</p>
      </div>
      <div className='sidebar__options'>
        {sideBar.map((val, ind) => {
          return RenderSideBarOption(val.path, val.icon, val.name, val.isSelected, () => {
            if (val.isLogout) {
              signOut();
            } else {
              updateSelected(ind);
            }
          });
        })}
      </div>
    </div>
  );
}
