import React from 'react';
import styled from 'styled-components';

import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

require('./custom.css');


const BrandingWrapper = styled.div`
width: 90%;
margin-left: 5%;
`;

const Image = styled.img`
height: 15rem;
object-fit: cover;
`;


const CatBranding = () => {

    const brandingImages = ['https://source.unsplash.com/random/?car/1', 'https://source.unsplash.com/random/?car/2', 'https://source.unsplash.com/random/?car/3', 'https://source.unsplash.com/random/?car/4', 'https://source.unsplash.com/random/?car/5',
        'https://source.unsplash.com/random/?car/6', 'https://source.unsplash.com/random/?car/7', 'https://source.unsplash.com/random/?car/8', 'https://source.unsplash.com/random/?car/9', 'https://source.unsplash.com/random/?car/10'];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        className: 'slides',

        responsive: [{
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }]
    
    };

    return (
        <BrandingWrapper>
            <Slider {...settings}>
                {brandingImages.map(image =>
                    <Image src={image} />
                )}
            </Slider>
        </BrandingWrapper>
    )
}

export default CatBranding;
