import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Content from '../components/Content';
import Countries from '../components/countries/Countries';
import Sidebar from '../components/Sidebar';
import SidebarMobile from '../components/SidebarMobile';
import Topbar from '../components/Topbar';

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Worldwide | todos países do mundo</title>
      </Helmet>
      <div className='home'>
        <Sidebar />
        <Content>
          <Topbar setShowMenu={() => setShowMenu(!showMenu)} />
          <Countries />
        </Content>
      </div>
      <SidebarMobile
        showMenu={showMenu}
        setShowMenu={() => setShowMenu(!showMenu)}
      />
    </HelmetProvider>
  );
};

export default Home;
