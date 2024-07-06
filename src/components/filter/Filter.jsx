import './filter.scss';
const Filter = () => {
  return (
    <section className='filter'>
      <h1>
        Search Results for <b> Lagos</b>
      </h1>
      <div className='top'>
        <div className='item'>
          <label htmlFor='city'>Location</label>
          <input
            type='text'
            id='city'
            name='city'
            placeholder='City Location'
          />
        </div>
      </div>

      <div className='bottom'>
        <div className='item'>
          <label htmlFor='type'>Type</label>
          <select name='' id=''>
            <option value='buy'>Buy</option>
            <option value='rent'>Rent</option>
          </select>
        </div>

        <div className='item'>
          <label htmlFor='property'>Property</label>
          <select name='' id=''>
            <option value='any'>Any</option>
            <option value='apartments'>Apartments</option>
            <option value='house'>House</option>
            <option value='condo'>Condo</option>
            <option value='land'>Land</option>
          </select>
        </div>
        <div className='item'>
          <label htmlFor='min-price'>Min Price</label>
          <input
            type='number'
            id='minPrice'
            name='minPrice'
            placeholder='any'
          />
        </div>
        <div className='item'>
          <label htmlFor='max-price'>Max Price</label>
          <input
            type='number'
            id='maxPrice'
            name='maxPrice'
            placeholder='any'
          />
        </div>
        <div className='item'>
          <label htmlFor='city'>Bed Room</label>
          <input type='text' id='bedroom' name='bedroom' placeholder='any' />
        </div>
        <button>
          <img src='/search.png' alt='' />
        </button>
      </div>
    </section>
  );
};

export default Filter;
