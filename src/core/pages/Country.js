import { useParams, useNavigate } from 'react-router-dom';
import { Country as CountryList, City, State } from 'country-state-city';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ArrowBack } from '@mui/icons-material';
import Topbar from '../components/Topbar';
import { useState } from 'react';
import SidebarMobile from '../components/SidebarMobile';

const Country = () => {
  const { countryIsoCode } = useParams();
  const country = CountryList.getCountryByCode(countryIsoCode);
  const numOfStates = State.getStatesOfCountry(countryIsoCode);
  const numOfCities = City.getCitiesOfCountry(countryIsoCode);
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{country.name} | detalhes do país</title>
      </Helmet>
      <div className='full-country'>
        <Topbar setShowMenu={() => setShowMenu(!showMenu)} />

        <div className='full-country__details'>
          <div className='full-country__back' onClick={() => navigate('../')}>
            <ArrowBack />
          </div>
          <div className='full-country__img'>
            <img
              alt={countryIsoCode}
              src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${countryIsoCode}.svg`}
            />
          </div>
          <h1 className='full-country__name'>{country.name}</h1>
          <div className='full-country__data'>
            <div className='full-country__states'>
              <h3 className='full-country__header'>
                {numOfStates.length} estados
              </h3>
              <ul>
                {numOfStates.sort().map((state) => (
                  <li className='full-country__item' key={state.name}>
                    {state.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className='full-country__cities'>
              <h3 className='full-country__header'>
                {numOfCities.length} cidades
              </h3>
              <ul>
                {numOfCities.sort().map((city) => (
                  <li className='full-country__item' key={city.name}>
                    {city.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <SidebarMobile
        showMenu={showMenu}
        setShowMenu={() => setShowMenu(!showMenu)}
      />
    </HelmetProvider>
  );
};

export default Country;
