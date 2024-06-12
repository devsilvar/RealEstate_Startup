import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import './testimony.scss';
import { IoStar } from 'react-icons/io5';
import stars from '../assets/stars.svg';
import { customerReview } from '../api/fakeData';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const TestimonySlide = () => {
  const genrateRatings = (ratings) => {
    let starRating = [];
    for (let i = 0; i < ratings; i++) {
      starRating.push(stars);
    }
    return starRating.map((item) => {
      return <IoStar color='orange' />;
    });
  };

  // export const reviewStars = (num) => {
  //   let stars = [];
  //   for (let i = 0; i < num; i++) {
  //     stars.push(<AiFillStar key={i} />);
  //   }

  return (
    <div className='testimonial'>
      <Splide
        className='spliderStyle'
        aria-label='My Favorite Images'
        options={{
          type: 'loop',
          perMove: 1,
          arrows: true,
          focus: 'center',
          perPage: 3,
          gap: '2rem',
          padding: '10px',
          autoplay: true,
          breakpoints: {
            1200: { arrows: false },
            800: { perPage: 2 },
            640: { perPage: 1 },
          },
        }}
      >
        {customerReview.map((items, index) => (
          <SplideSlide key={index} data-splide-interval='2000'>
            <div className='review' key={index}>
              <div className='review-section'>
                <img src={items.image} alt='images' />
                <div>
                  <p>
                    {' '}
                    <b> {items.reviewer}</b>
                  </p>
                  <p>customer</p>
                </div>
              </div>

              <span>{items.comment}</span>

              <h3>{genrateRatings(items.rating)}</h3>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default TestimonySlide;
