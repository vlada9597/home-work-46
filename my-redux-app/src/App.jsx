import React from 'react';
import PostsList from './components/PostsList';

export default function App() {
  return (
    <div>
      <header style={{ padding: 16, borderBottom: '1px solid #ddd' }}>
        <h1>My Redux Toolkit Demo</h1>
      </header>

      <main style={{ padding: 16 }}>
        <PostsList />
      </main>
    </div>
  );
}
