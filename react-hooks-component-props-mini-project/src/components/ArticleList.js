import React from 'react';
import Article from './Article';

const ArticleList = (props) => {
  const { posts } = props;

  const articleElements = posts.map((post) => (
    <Article
      key={post.id}
      title={post.title}
      date={post.date}
      preview={post.preview}
    />
  ));

  return <main>{articleElements}</main>;
}

export default ArticleList;
