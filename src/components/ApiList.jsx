import { useState } from "react";

export default function ApiList() {
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("naruto");
  const [hassearched, setHasSearched] = useState(false);

  const fetchAnime = async () => {
    setLoading(true);
    setHasSearched(true);
    setLoading(true);

    try {
      const res = await fetch(
        `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=10`
      );

      const jason = await res.json();
      setAnime(jason.data);
    } catch (error) {
      console.error("Feil ved henting av anime.", error);
      setAnime([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>API</h2>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search for anime..."
        className="search"
      />

      <button onClick={fetchAnime}>Hent Anime</button>

      {loading && <p>Laster...</p>}

      {hassearched && !loading && anime.length === 0 && (
        <p>Ingen treff på søket ditt.</p>
      )}

      <ul className="list mt-2">
        {anime.map((item) => (
          <li key={item.mal_id}>
            <img
              src={item.images.jpg.image_url}
              alt={item.title}
              width="60"
              height="84"
              className="cover"
            />
            <div>
              <strong>{item.title}</strong>
              <div className="mt-1">
                {item.year ?? "?"} • {item.score ?? "?"}/10
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
