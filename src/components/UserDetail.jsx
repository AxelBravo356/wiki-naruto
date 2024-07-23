import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetByIdCharacter } from "../api/naruto.api";

export function UserDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadDetails() {
      if (id) {
        try {
          const res = await GetByIdCharacter(id);
          setCharacter(res.data);
        } catch (error) {
          console.error("Error fetching character details:", error);
          setError("Error fetching character details");
        }
      }
    }
    loadDetails();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="rounded-lg mx-auto max-w-xl bg-zinc-700  p-5">
      <div>
        <img
          className="mx-auto object-contain rounded-xl"
          src={character.images[0]}
          alt={character.name}
        />
        <h1 className="text-2xl text-center mb-2">{character.name}</h1>
        {character.personal.occupation && (
          <h2 className="text-center mb-2 tex">
            {character.personal.occupation}
          </h2>
        )}
      </div>
      <div className="text-start">
        {character.personal.status && (
          <p className="m-2 italic text-center ">
            Status: {character.personal.status}
          </p>
        )}
        {character.jutsu && (
          <p className="m-2 text-justify">
            Jutsus: {character.jutsu.join(", ")}
          </p>
        )}
      </div>
    </div>
  );
}
