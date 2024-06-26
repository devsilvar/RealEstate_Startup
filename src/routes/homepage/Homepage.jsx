import { useState } from 'react';
import { customerReview, listData } from '../../api/fakeData';
import sun from '../../assets/sun.svg';
import './homepage.scss';
import TestimonySlide from '../../components/testimony/TestimonySlide';

const Homepage = () => {
  const [searchState, setsearchState] = useState({
    state: 'buy',
    location: '',
    minPrice: '',
    maxPrice: '',
  });
  listData.length = 3;
  const [featured, setfeatured] = useState(listData);
  const handleChange = (e) => {
    e.preventDefault();
    setsearchState((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const switchType = (type) => {
    setsearchState((prev) => ({ ...prev, state: type }));
  };
  return (
    <main className='main-homePage'>
      <section className='homepage'>
        <div className='left-section'>
          <div className='left-wrapper'>
            <h1>
              {' '}
              <b> Find Real Estate & Get Your Dream Place</b>
            </h1>
            <p>
              Discover your dream home with our expert real estate services.
              Trust our dedicated team to guide you to the ideal property. Start
              your journey today!
            </p>

            <div className='homepage-search'>
              <div className='homepage-button'>
                <button
                  onClick={() => switchType('buy')}
                  className={searchState.state == 'buy' ? 'active' : ''}
                >
                  Buy
                </button>
                <button
                  onClick={() => switchType('rent')}
                  className={searchState.state == 'rent' ? 'active' : ''}
                >
                  Rent
                </button>
              </div>
              <div className='homepage-inputs'>
                <input
                  type='text'
                  placeholder='City Location'
                  id='location'
                  value={searchState.location}
                  onChange={handleChange}
                  min={0}
                  max={10000000}
                />
                <input
                  type='text'
                  placeholder='Min Price'
                  id='minPrice'
                  value={searchState.minPrice}
                  onChange={handleChange}
                  min={0}
                  max={10000000}
                />
                <input
                  type='text'
                  placeholder='Max Price'
                  id='maxPrice'
                  value={searchState.maxPrice}
                  onChange={handleChange}
                  min={0}
                  max={10000000}
                />
                <button>
                  <img src='/search.png' alt='' />
                </button>
              </div>
            </div>

            <div className='homepage-info'>
              <div>
                <h2>16+</h2>
                <p>Years Of Experince</p>
              </div>
              <div>
                <h2>200+</h2>
                <p>Awards Gained</p>
              </div>
              <div>
                <h2>2000+</h2>
                <p>Property ready</p>
              </div>
            </div>
          </div>
        </div>
        <div className='right-section'>
          <div className='img-wrapper'>
            <img src='/bg.png' alt='' />
            <img src={sun} className='sunicon' alt='' />
          </div>
        </div>
      </section>

      <section className='homepage-offer'>
        <h2>We Offer Exquisite Housing </h2>
        <div className='icons'>
          <div className='icon'>
            <div className='img-wrapper'>
              <img src='/bus.png' alt='' />
            </div>
            <h4>Easy Access to trasnport </h4>
            <p>
              Ensuring easy access to transport is crucial for enhancing the
              quality of life and promoting economic development
            </p>
          </div>
          <div className='icon'>
            <div className='img-wrapper'>
              <img src='/fee.png' alt='' />
            </div>

            <h4>Affordable Agent Fee</h4>
            <p>
              Clear and upfront information about agent fees to help clients
              understand what they are paying for and avoid unexpected costs
            </p>
          </div>
          <div className='icon'>
            <div className='img-wrapper'>
              <img src='/pet.png' alt='' />
            </div>
            <h4>Pet Safe Locations</h4>
            <p>
              The environments are designed to ensure the safety and well-being
              of animals. Animals are welcome and protected
            </p>
          </div>
        </div>
      </section>

      <section className='popular-houses'>
        <h2>Popular Properties</h2>
        <div className='houses-section'>
          {featured.map((house) => (
            <div className='fetured-cards'>
              <div className='fetured-wrapper'>
                <div className='img-wrapper'>
                  <img src={house.img} alt='' className='house-img' />
                </div>

                <div className='card-body'>
                  <p className='title'>{house.title}</p>

                  <div className='f-icon-section'>
                    <p>
                      <span> Price</span> ${house.price}
                    </p>
                    <div className='fetured-icons'>
                      <div className='f-icon'>
                        <img src='/bed.png' alt='' />
                        <span>{house.bedroom}</span>
                      </div>

                      <div className='f-icon'>
                        <img src='/bath.png' alt='' />
                        <span>{house.bathroom}</span>
                      </div>
                    </div>
                  </div>

                  <div className='address'>
                    <span>Location </span> {house.address}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='testimony'>
        <h2>What Others Are Saying About Us </h2>
        <div className='icons'>
          <TestimonySlide />
        </div>
      </section>
    </main>
  );
};

export default Homepage;
