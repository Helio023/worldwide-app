import { useState } from 'react';
import Content from '../components/Content';
import Sidebar from '../components/Sidebar';
import SidebarMobile from '../components/SidebarMobile';
import Topbar from '../components/Topbar';

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='home'>
      <Sidebar />
      <SidebarMobile
        showMenu={showMenu}
        setShowMenu={() => setShowMenu(!showMenu)}
      />
      <Content>
        <Topbar setShowMenu={() => setShowMenu(!showMenu)} />
        <div className='challenge'>
          <h1>Implementar esta página será o seu desafio!!!</h1>
        </div>
      </Content>
    </div>
  );
};

export default Home;
