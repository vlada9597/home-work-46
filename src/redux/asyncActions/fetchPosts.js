import { createAsyncThunk } from '@reduxjs/toolkit';

// Використовуємо JSONPlaceholder як приклад API.
// Замініть URL на ваше реальне API.
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`HTTP ${res.status}: ${text}`);
      }
      const data = await res.json();
      return data; // payload для fulfilled
    } catch (err) {
      return rejectWithValue(err.message || 'Fetch error');
    }
  }
);
