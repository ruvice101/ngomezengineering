import React from 'react';

const Hero = ({ image, title }) => (
  <div
    className="full-width-image-container margin-top-0"
    style={{
      backgroundImage: `url(${
        (image && !!image.childImageSharp)
          ? image.childImageSharp.fluid.src
          : image
        })`,
    }}
  >
    <h2
      className="has-text-weight-bold is-size-1"
      style={{
        boxShadow: '0.5rem 0 0 #339999, -0.5rem 0 0 #339999',
        backgroundColor: '#339999',
        color: 'white',
        padding: '1rem',
      }}
    >
      {title}
    </h2>
  </div>
)

export default Hero;