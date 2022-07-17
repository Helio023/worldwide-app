import { Search } from '@mui/icons-material';

const Searcher = ({ placeholder, searchTerm, setSearchTerm }) => {
  return (
    <div className='searcher'>
      <input
        className='searcher__input'
        value={searchTerm}
        type='text'
        placeholder={placeholder}
        onChange={setSearchTerm}
      />
      <div className='searcher__icon'>
        <Search />
      </div>
    </div>
  );
};

export default Searcher;
