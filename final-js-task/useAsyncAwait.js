import { getRandomFromList } from './getRandomFromList';

async function useAsyncAwait() {
  const serverUrl = 'https://jsonplaceholder.typicode.com';
  let currentPostId;
  let currentUserId;
  let currentUser;
  let response = await fetch(`${serverUrl}/comments`, { method: 'GET' });
  const commentList = await response.json();
  console.log('comments: ', commentList);
  const comment = getRandomFromList(commentList);
  console.log('comment: ', comment);
  currentPostId = comment.postId;
  response = await fetch(`${serverUrl}/posts/${currentPostId}`, {
    method: 'GET',
  });
  const post = await response.json();
  console.log('post: ', post);
  currentUserId = post.userId;
  response = await fetch(`${serverUrl}/users/${currentUserId}`, {
    method: 'GET',
  });
  const user = await response.json();
  currentUser = user;
  console.log('user: ', user);
  response = await fetch(`${serverUrl}/posts/${currentPostId}`, {
    method: 'DELETE',
  });
  const deletedPost = await response.json();
  console.log('post after delete: ', deletedPost);
  currentUser.username = currentUser.username.split('').reverse().join('');
  response = await fetch(`${serverUrl}/users/${currentUserId}`, {
    method: 'PUT',
    body: JSON.stringify(currentUser),
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  const updateUser = await response.json();
  console.log('user after change username: ', updateUser);
}

useAsyncAwait().catch((error) => {
  throw error;
});
