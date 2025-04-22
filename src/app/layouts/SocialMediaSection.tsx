/* eslint-disable @next/next/no-img-element */
import React from 'react';
import useFetchPosts from '../hooks/usePosts';
import { validateImage } from '../lib/utils';

const SocialMediaSection = () => {
  const { loading, posts } = useFetchPosts();
  
  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>;
  }

  if (!posts || !Array.isArray(posts))
  {
    return <div>No posts available</div>
  }

  return (
    <section className="py-12 bg-gradient-to-b from-[#0046CC] to-[#09131D] min-h-screen">
      <div className="relative gap-8 items-center py-16 px-8 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-1 sm:py-16 lg:px-6 glassMorphicSocialMedia">
        <h2 className="text-3xl font-bold text-center mb-2 text-white">@NextPhase</h2>
        <p className="text-center text-gray-300 mb-8">Follow us on Instagram for the latest updates</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts && posts.map((post) => (
            <div key={post.id} className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 mb-4 bg-gray-800">
              <div className="relative aspect-square">
                <img 
                  src={validateImage(post.imageUrl)} 
                  alt={post.description} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              <div className="p-4">
                {/* likes and comments */}
                <div className="items-center space-x-4 mb-3 hidden">
                  <div className="flex items-center space-x-1">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <p className="text-sm text-white mb-2 line-clamp-2">{post.description}</p>
                
                <a 
                  href={post.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block mt-3 w-full py-2 bg-gradient-to-r from-[#002366] to-[#0066CC] text-white rounded-md text-sm font-medium hover:opacity-90 transition-opacity text-center"
                >
                  View Post
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a 
            href="https://www.instagram.com/nextphasexlr8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-[#002366] to-[#0066CC] hover:opacity-70 transition-opacity"
          >
            Follow Us on Instagram
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;