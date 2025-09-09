import ApiList from "./components/ApiList"; // component
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Todo from "./components/Todo";
import "./App.css"; // current folder
import Header from "./components/Header"; // component
import AnimeCard from "./components/AnimeCard"; // component

const anime = [
  { id: 1, title: "Naruto", year: 2002, rating: 8.4 }, // rating out of 10 from imdb
  { id: 2, title: "Attack on Titan", year: 2013, rating: 9.1 },
  { id: 3, title: "Hajime no ippo", year: 2000, rating: 8.8 },
  { id: 4, title: "Hunter X Hunter", year: 2011, rating: 9.0},
];

export default function App() {
  const [count, setCount] = useState(0); // state hook

  return (
    <>
      <main className="container">
        <Header title="My Anime" />
        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
                <button onClick={() => setCount(count + 1)}>
                  Clicked {count} times
                </button>

                <button className="reset-button"
                  onClick={() => setCount(0)}
                  
                >
                  Reset
                </button>

                <ul className="list">
                  {anime.map((item) => (
                    <li key={item.id}>
                      <AnimeCard
                        title={item.title}
                        year={item.year}
                        rating={item.rating}
                      />
                    </li>
                  ))}
                </ul>
              </>
            }
          />

          {/*Todo page */}
          <Route path="/todo" element={<Todo />} />

          <Route path="/api" element={<ApiList />}/>
        </Routes>
      </main>
    </>
  );
}
