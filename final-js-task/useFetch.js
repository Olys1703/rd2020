import { getRandomFromList } from './getRandomFromList';

function useFetch() {
  const serverUrl = 'https://jsonplaceholder.typicode.com';
  let currentPostId;
  let currentUserId;
  let currentUser;
  return fetch(`${serverUrl}/comments`, { method: 'GET' })
    .then((response) => response.json())
    .then((commentList) => {
      console.log('comments: ', commentList);
      const comment = getRandomFromList(commentList);
      console.log('comment: ', comment);
      currentPostId = comment.postId;
      return fetch(`${serverUrl}/posts/${currentPostId}`, { method: 'GET' });
    })
    .then((response) => response.json())
    .then((post) => {
      console.log('post: ', post);
      currentUserId = post.userId;
      return fetch(`${serverUrl}/users/${currentUserId}`, { method: 'GET' });
    })
    .then((response) => response.json())
    .then((user) => {
      currentUser = user;
      console.log('user: ', user);
      return fetch(`${serverUrl}/posts/${currentPostId}`, { method: 'DELETE' });
    })
    .then((response) => response.json())
    .then((post) => {
      console.log('post after delete: ', post);
      currentUser.username = currentUser.username.split('').reverse().join('');
      return fetch(`${serverUrl}/users/${currentUserId}`, {
        method: 'PUT',
        body: JSON.stringify(currentUser),
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
    })
    .then((response) => response.json())
    .then((user) => {
      console.log('user after change username: ', user);
    });
}
useFetch().catch((error) => {
  throw error;
});
