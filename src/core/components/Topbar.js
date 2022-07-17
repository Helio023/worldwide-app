import {
  GitHub,
  FacebookOutlined,
  YouTube,
  Instagram,
  Menu,
} from '@mui/icons-material';

const Topbar = ({ setShowMenu }) => {
  return (
    <div className='topbar'>
      <div className='topbar__hamburguer' onClick={setShowMenu}>
        <Menu />
      </div>
      <ul className='topbar__menu'>
        <li className='topbar__item'>
          <a
            href='https://github.com/helio023/'
            rel='noreferrer'
            target='_blank'
            className='topbar__link'
          >
            <GitHub />
          </a>
        </li>
        <li className='topbar__item'>
          <a
            href='https://www.youtube.com/c/CssDescomplicado'
            rel='noreferrer'
            target='_blank'
            className='topbar__link'
          >
            <YouTube />
          </a>
        </li>
        <li className='topbar__item'>
          <a
            href='https://www.facebook.com/cssdescomplicado'
            target='_blank'
            rel='noreferrer'
            className='topbar__link'
          >
            <FacebookOutlined />
          </a>
        </li>
        <li className='topbar__item'>
          <a
            href='https://www.instagram.com/cssdescomplicado/'
            target='_blank'
            rel='noreferrer'
            className='topbar__link'
          >
            <Instagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Topbar;
