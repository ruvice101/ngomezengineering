import React from 'react'

const Banner = ({ image, title }) => (
    <div
        className="full-width-image-container margin-top-0"
        style={{
            backgroundImage: `url(${
            !!image.childImageSharp
                ? image.childImageSharp.fluid.src
                : image
            })`,
        }}
        >
        <h2
            className="has-text-weight-bold is-size-1"
            style={{
            boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
            backgroundColor: '#f40',
            color: 'white',
            padding: '1rem',
            }}
        >
            {title}
        </h2>
    </div>
);

export default Banner;