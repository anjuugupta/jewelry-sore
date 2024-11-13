import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import imgones from '../../assets/images/products/pendants/pendantsthree.jpg'
import img2 from '../../assets/images/products/pendants/pendantsthree.jpg'
import img3 from '../../assets/images/products/pendants/pendantsthree.jpg'

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  // Simulate fetching blog data
  useEffect(() => {
    const fetchBlogs = async () => {
      const blogData = [
        {
          id: 1,
          title: 'The Timeless Elegance of Gold Jewelry',
          excerpt: 'Gold jewelry has always been a symbol of wealth, power, and beauty. In this post, we explore why gold continues to be the most coveted material in jewelry making...',
          image: {imgones},
          date: '2024-11-13',
        },
        {
          id: 2,
          title: 'Why 22K Gold is the Best for Wedding Rings',
          excerpt: 'Choosing the right metal for a wedding ring is crucial. Here’s why 22K gold is often the preferred choice for wedding bands...',
          image: {img2},
          date: '2024-11-10',
        },
        {
          id: 3,
          title: 'Caring for Your Gold Jewelry: Tips and Tricks',
          excerpt: 'Gold jewelry is durable, but it still requires care. Learn the best practices for cleaning and maintaining your gold pieces...',
          image: {img3},
          date: '2024-11-05',
        },
      ];
      setBlogs(blogData);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-container">
      <h2>Our Latest Blogs</h2>
      <div className="blog-list">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
