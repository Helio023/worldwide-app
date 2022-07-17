import { NavLink } from 'react-router-dom';
import { LanguageOutlined, TravelExploreOutlined } from '@mui/icons-material';
import Logo from './Logo';

const SidebarMobile = ({showMenu, setShowMenu}) => {
  return (
    <div className={showMenu ? 'wrapper show' : 'wrapper'} onClick={setShowMenu}>
      <div className={showMenu ? 'sidebarMobile show' : 'sidebarMobile'}>
        <Logo />

        <ul className='sidebarMobile__menu'>
          <NavLink
            to='/'
            className={(linkProps) =>
              linkProps.isActive
                ? 'sidebarMobile__link--active'
                : 'sidebarMobile__link'
            }
          >
            <LanguageOutlined /> <span>Países</span>
          </NavLink>
          <NavLink
            to='/states'
            className={(linkProps) =>
              linkProps.isActive
                ? 'sidebarMobile__link--active'
                : 'sidebarMobile__link'
            }
          >
            <TravelExploreOutlined /> <span>Estados</span>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default SidebarMobile;
