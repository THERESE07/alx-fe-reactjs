import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, isLoading, isError, error, refetch } = useQuery('posts', fetchPosts, {
    cacheTime: 5 * 60 * 1000, // 5 minutes: Data will be removed from the cache if unused for this duration.
    staleTime: 2 * 60 * 1000, // 2 minutes: Data remains fresh for this duration and won't refetch automatically.
    refetchOnWindowFocus: false, // Disable refetching when the window gains focus.
    keepPreviousData: true, // Maintain previous data while fetching new data.
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => refetch()}>Refetch</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
