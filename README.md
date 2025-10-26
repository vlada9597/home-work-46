# 🧩 React Redux Toolkit App — Homework 46

## 📘 Короткий опис
Цей проєкт створено з використанням **Vite**, **React** та **Redux Toolkit**.  
Додаток демонструє роботу з **асинхронними діями** за допомогою `createAsyncThunk` — приклад завантаження даних із публічного API та відображення їх у компоненті React.

---

## ⚙️ Використані технології
- Vite (швидкий збірник проєкту)
- React
- Redux Toolkit (`createSlice`, `createAsyncThunk`)
- React-Redux (`Provider`, `useSelector`, `useDispatch`)

---

## 🚀 Як запустити проєкт локально

1. **Клонуй репозиторій:**

   git clone https://github.com/vlada9597/home-work-46.git
   cd home-work-46
   
2.Встанови залежності:

npm install

3.Запусти у режимі розробки:

npm run dev

4.Відкрий http://localhost:5173
, щоб переглянути додаток.

5.Зібрати production build:

npm run build
npm run preview


## 🗂️ Структура проєкту
home-work-46/
my-redux-app/
├── src/
│ ├── redux/
│ │ ├── store.js
│ │ ├── slices/
│ │ │ └── postsSlice.js
│ │ └── asyncActions/
│ │ └── fetchPosts.js
│ ├── components/
│ │ └── PostsList.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── package.json
├── README.md
└── ...


----------------------------

🌐 Демо-версія

Додаток розгорнуто на платформі  Netlify:
🔗 


🔄 Функціонал

Ініціалізація Redux store через configureStore.

Асинхронна дія fetchPosts створена за допомогою createAsyncThunk.

Обробка станів pending, fulfilled, rejected.

Використання useDispatch та useSelector у компоненті PostsList.

Відображення станів завантаження та помилки.

Простий UI для демонстрації асинхронності.

✅ Критерії виконання

 Проєкт ініціалізовано за допомогою Vite

 Використано Redux Toolkit з createAsyncThunk

 Асинхронна логіка інтегрована у Redux

 Коректна обробка станів pending, fulfilled, rejected

 Наявний файл README.md

 Проєкт деплойнуто на Netlify

🧠 Поради

Використовуйте Redux DevTools для відлагодження стану.

Для складніших сценаріїв можна застосувати Redux Saga або RTK Query.

Конфігураційні змінні API можна винести у .env.

