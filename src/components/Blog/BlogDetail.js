import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = () => {
      const blogData = {
        1: {
          title: 'The Timeless Elegance of Gold Jewelry',
          content: 'Gold jewelry has been cherished for centuries due to its durability and beauty...',
          image: '/images/gold-jewelry-1.jpg',
          date: '2024-11-13',
        },
        2: {
          title: 'Why 22K Gold is the Best for Wedding Rings',
          content: 'When it comes to wedding rings, 22K gold is a popular choice...',
          image: '/images/gold-jewelry-2.jpg',
          date: '2024-11-10',
        },
        3: {
          title: 'Caring for Your Gold Jewelry: Tips and Tricks',
          content: 'Maintaining your gold jewelry can be easy with the right care...',
          image: '/images/gold-jewelry-3.jpg',
          date: '2024-11-05',
        },
      };
      setBlog(blogData[id]);
    };

    fetchBlog();
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="blog-detail">
      <img src={blog.image} alt={blog.title} />
      <h1>{blog.title}</h1>
      <p>{new Date(blog.date).toLocaleDateString()}</p>
      <div>{blog.content}</div>
    </div>
  );
};

export default BlogDetail;
