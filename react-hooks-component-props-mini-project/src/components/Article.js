import React from 'react';

const Article = (props) => {
  const { title, date, preview } = props;

  const calculateReadTime = (articleLength) => {
    let readTime;
    if (articleLength < 30) {
      const coffeeCups = Math.ceil(articleLength / 5);
      readTime = `☕️ ${coffeeCups} min read`;
    } else {
      const bentoBoxes = Math.ceil(articleLength / 10);
      readTime = `🍱🍱🍱🍱 ${bentoBoxes} min read`;
    }
    return readTime;
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date ? date : 'January 1, 1970'}</small>
      <p>{preview}</p>
      <small>{calculateReadTime(Math.ceil(preview.length / 900))}</small>
    </article>
  );
}

export default Article;
