"use client";

import { useState, useEffect } from 'react';
import { Post } from '../types/post';

const useFetchPosts = () => {
  const [posts, setPosts] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/posts`);

        if (!response.ok) {
          throw new Error('Camp program not found');
        }

        const data: Post = await response.json();
        setPosts(data);
      } catch (err) {
        setError('Failed to fetch camp program');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
  
  return { loading, error, posts };
};

export default useFetchPosts;
