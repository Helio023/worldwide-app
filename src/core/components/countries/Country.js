import {
  CurrencyExchangeOutlined,
  LocationOn,
  LocalPhone,
  ArrowForward,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Country = ({ country }) => {
  const navigate = useNavigate();

  const handleViewPage = (countryIsoCode) => {
    navigate(`country/${countryIsoCode}`);
  };
  return (
    <div className='country'>
      <h4 className='country__name'>
        <div className='country__flag'>
          <img
            alt={country.name}
            src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country.isoCode}.svg`}
          />
        </div>
        {country.name}
      </h4>

      <div className='country__data'>
        <div className='country__data--item'>
          <LocalPhone /> Cód. telefónico : <span>{country.phonecode}</span>
        </div>
        <div className='country__data--item'>
          <CurrencyExchangeOutlined /> moeda : <span>{country.currency}</span>
        </div>
        <div className='country__data--item'>
          <LocationOn /> latitude : <span>{country.latitude}</span>
        </div>
        <div className='country__data--item'>
          <LocationOn /> longitude : <span>{country.longitude}</span>
        </div>
      </div>
      <button
        className='country__btn'
        onClick={() => handleViewPage(country.isoCode)}
      >
        Ver mais <ArrowForward />
      </button>
    </div>
  );
};

export default Country;
