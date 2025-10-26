import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/asyncActions/fetchPosts';

export default function PostsList() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Posts</h2>

      {status === 'loading' && <p>Завантаження...</p>}
      {status === 'failed' && (
        <div>
          <p style={{ color: 'red' }}>Помилка: {error}</p>
          <button onClick={() => dispatch(fetchPosts())}>Спробувати ще</button>
        </div>
      )}

      {status === 'succeeded' && (
        <ul>
          {items.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}

      {status === 'idle' && <p>Готово до завантаження.</p>}
    </div>
  );
}
