import React, { useState, useEffect } from 'react';
import './Carousel.css';
import {useNavigate} from "react-router-dom";

const ImageCarousel = ({ images, interval }) => {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(index => (index + 1) % images.length);
        }, interval);
        return () => clearInterval(intervalId);
    }, [index, images.length, interval]);

    const redirect = () =>{
        if (!images[index].id){
            navigate('/*')
        }
        else {
            navigate(`/singlerestaurant/${images[index].id}`)
            window.scrollTo(0,0);
        }
    }

    return (
        <div>
            <div className="carousel1">
                <div
                    className="image"
                    style={{ backgroundImage: `linear-gradient(to bottom,rgba(245, 246, 252, 0),rgba(27, 36, 105, 1)90%),url(${images[index].carouselImage})` }}
                        onClick={redirect}
                >
                    <p className='carouselText'>{images[index].carouselText}</p>
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;
