import { Routes, Route } from 'react-router-dom';
import Home from './core/pages/Home'
import States from './core/pages/States'
import Country from './core/pages/Country';
import NotFound from './core/pages/NotFound';


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/states' element={<States />} />
        <Route path='/country/:countryIsoCode' element={<Country />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </>
  );
};

export default App;
