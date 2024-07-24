import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetClanById } from "../api/naruto.api";
import { UserCard } from "./UserCard";

export function ClanDetail() {
  const { id } = useParams();
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function loadClanDetails() {
      if (id) {
        try {
          const res = await GetClanById(id);
          setCharacters(res.data.characters);
          // console.log("personajes", res.data.characters);
        } catch (error) {
          console.error("Error fetching character details:", error);
          setError("Error fetching character details");
        }
      }
    }
    loadClanDetails();
  }, [id]);
  return (
    <div className="grid grid-cols-4 gap-2 mb-5">
      {characters.map((character) => (
        <UserCard key={character.id} character={character} />
      ))}
    </div>
  );
}
