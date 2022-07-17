import { NavLink } from 'react-router-dom';
import { LanguageOutlined, TravelExploreOutlined } from '@mui/icons-material';
import Logo from './Logo';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Logo />

      <ul className='sidebar__menu'>
        <NavLink
          to='/'
          className={(linkProps) =>
            linkProps.isActive ? 'sidebar__link--active' : 'sidebar__link'
          }
        >
          <LanguageOutlined /> <span>Países</span>
        </NavLink>
        <NavLink
          to='/states'
          className={(linkProps) =>
            linkProps.isActive ? 'sidebar__link--active' : 'sidebar__link'
          }
        >
          <TravelExploreOutlined /> <span>Estados</span>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
