import { useQuery } from "@apollo/client";
import { GET_ANIME_TITLES, GET_TOP_100 } from "../services/queries";

function AnimeList() {
  // const { loading, error, data } = useQuery(GET_ANIME_TITLES);
  const { loading, error, data } = useQuery(GET_TOP_100);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const animeTitles = data.Page.media;

  return (
    <div>
      <h2>Anime Titles</h2>
      <ul>
        {animeTitles.map((anime: { id: number; title: { romaji: string } }) => (
          <li key={anime.id}>{anime.title.romaji}</li>
        ))}
      </ul>
    </div>
  );
}

export default AnimeList;
