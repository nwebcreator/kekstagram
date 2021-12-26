import React, { useEffect, useState } from 'react';
import Main from './components/main/main';
import Post from './types/post';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://24.javascript.pages.academy/kekstagram/data")
    .then(resp => resp.json())
    .then((posts: Post[]) => setPosts(posts));
  }, []);

  return (
    <Main posts={posts} />
  );
}

export default App;
