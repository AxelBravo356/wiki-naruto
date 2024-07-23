// import { useNavigate } from "react-router-dom";

export function UserCard({ character }) {
  // const navigate = useNavigate();
  const handleClick = () => {
    window.open(`/character/${character.id}`, "_blank", "noopener,noreferrer");
  };

  const imageSrc = character.images[0]
    ? character.images[0]
    : character.images[1];

  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer rounded-lg"
      // onClick={() => navigate(`/character/${character.id}`)}
      onClick={handleClick}
    >
      <img
        className="object-contain h-48 w-96 mx-auto  p-5"
        src={imageSrc}
        alt={character.name}
      />
      <h1 className="font-bold uppercase mb-2 text-center">{character.name}</h1>
    </div>
  );
}
