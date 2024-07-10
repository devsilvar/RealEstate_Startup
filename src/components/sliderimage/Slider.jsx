import { useState } from 'react';
import './Sliderimg.scss';

const Slider = ({ images }) => {
  const [imageIndex, setimageIndex] = useState(null);

  return (
    <section className='slidesection'>
      {imageIndex !== null && (
        <div className='fullSlider'>
          <div className='arrow'>
            <img
              src='/arrow.png'
              alt=''
              onClick={() =>
                setimageIndex((prev) =>
                  prev <= 0 ? (prev = images.length - 1) : (prev = prev - 1)
                )
              }
            />
          </div>
          <div className='imageContainer'>
            <img src={images[imageIndex]} alt='' />
          </div>
          <div className='arrow'>
            <img
              src='/arrow.png'
              className='right'
              alt=''
              onClick={() =>
                setimageIndex((prev) =>
                  prev >= images.length - 1 ? (prev = 0) : (prev += 1)
                )
              }
            />
          </div>
          <img
            src='/close.svg'
            alt=''
            className='close'
            onClick={() => setimageIndex(null)}
          />
        </div>
      )}

      <div className='bigImg'>
        <img src={images[0]} alt='' onClick={() => setimageIndex(0)} />
      </div>
      <div className='smalImg'>
        {images.slice(1).map((item, index) => (
          <img
            src={item}
            alt=''
            onClick={() => setimageIndex(index + 1)}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
