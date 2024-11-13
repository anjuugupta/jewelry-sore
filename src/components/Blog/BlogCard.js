import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} />
      <div className="blog-card-content">
        <h3>{blog.title}</h3>
        <p>{blog.excerpt}</p>
        <Link to={`/blog/${blog.id}`} className="read-more">Read More</Link>
        <p className="blog-date">{new Date(blog.date).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default BlogCard;
