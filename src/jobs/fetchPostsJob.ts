import fetch from 'node-fetch';

export const fetchPostsHandler = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  console.log('Fetched posts:', data);
};

export const fetchPostsConfig = {
  name: 'fetch-posts',
  cron: '* * * * *',
};
