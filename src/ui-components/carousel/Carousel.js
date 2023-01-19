import React, { useState, useEffect } from 'react';
import './Carousel.css';

const ImageCarousel = ({ images, interval }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(index => (index + 1) % images.length);
        }, interval);
        return () => clearInterval(intervalId);
    }, [index, images.length, interval]);

    return (
        <div>
            <div className="carousel1">
                <div
                    className="image"
                    style={{ backgroundImage: `linear-gradient(to bottom,rgba(245, 246, 252, 0),rgba(27, 36, 105, 1)90%),url(${images[index].src})` }}
                >
                    <p className='carouselText'>{images[index].text}</p>
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;
