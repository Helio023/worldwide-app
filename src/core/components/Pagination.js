import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const Pagination = ({
  firstItem,
  lastItem,
  countries,
  handlePreviousItems,
  handleNextItems,
}) => {
  return (
    <div className='pagination'>
      <button
        disabled={firstItem <= 0}
        className='pagination__back'
        onClick={handlePreviousItems}
      >
        <ChevronLeft />
      </button>

      <button
        disabled={lastItem >= countries.length - 1}
        className='pagination__next'
        onClick={handleNextItems}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
