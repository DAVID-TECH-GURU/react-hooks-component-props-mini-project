import React from 'react';

function About(props) {
  const image = props.image || 'https://via.placeholder.com/215';
  const alt = props.name ? `${props.name} logo` : 'blog logo';
  return (
    <aside>
      <img src={image} alt={alt} />
      <p>{props.text}</p>
    </aside>
  );
}

export default About;
