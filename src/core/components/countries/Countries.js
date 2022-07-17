import { Country as CountriesList } from 'country-state-city';
import { useEffect, useState } from 'react';
import Country from './Country';
import Pagination from '../Pagination';
import Searcher from '../Searcher';

const Countries = () => {
  const [countries, setContries] = useState([]);
  const [firstItem, setFirstItem] = useState(0);
  const [lastItem, setLastItem] = useState(6);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsCounter = 6;

  useEffect(() => {
    setContries(CountriesList.getAllCountries());
  }, [firstItem, lastItem, countries]);

  const handleNextItems = () => {
    if (lastItem < countries.length - 1) {
      setFirstItem((val) => val + itemsCounter);
      setLastItem((val) => val + itemsCounter);
    }
  };

  const handlePreviousItems = () => {
    if (firstItem > 0) {
      setFirstItem((val) => val - itemsCounter);
      setLastItem((val) => val - itemsCounter);
    }
  };

  return (
    <>
      <div className='countries'>
        <div className='countries__search'>
          <Searcher
            searchTerm={searchTerm}
            setSearchTerm={(e) => setSearchTerm(e.target.value)}
            placeholder='Escreve o nome do país'
          />
        </div>
        <div className='countries__list'>
          {searchTerm
            ? countries
                .filter((country) =>
                  country.name
                    .toLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                )
                .sort()
                .map((country) => (
                  <div key={country.name}>
                    <Country country={country} />
                  </div>
                ))
            : countries
                .slice(firstItem, lastItem)
                .sort()
                .map((country) => (
                  <div key={country.name}>
                    <Country country={country} />
                  </div>
                ))
                }
        </div>
      </div>
      {!searchTerm && (
        <Pagination
          firstItem={firstItem}
          lastItem={lastItem}
          handleNextItems={handleNextItems}
          handlePreviousItems={handlePreviousItems}
          countries={countries}
        />
      )}
    </>
  );
};

export default Countries;
