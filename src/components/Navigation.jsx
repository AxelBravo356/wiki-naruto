import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="flex justify-between py-3">
      <Link to="/wiki-naruto">
        <h1 className="font-bold text-3xl mb-4">Naruto - Wiki</h1>
      </Link>
      <div className="flex gap-5">
        <Link to="/wiki-naruto/characters">
          <h1 className="font-bold px-3 py-2  text-xl mb-4 hover:bg-zinc-700 hover:rounded-lg">
            Characters
          </h1>
        </Link>
        <Link to="/wiki-naruto/clan">
          <h1 className="font-bold px-3 py-2 text-xl hover:bg-zinc-700 hover:rounded-lg mb-4">
            Clan
          </h1>
        </Link>
        <Link to="/wiki-naruto/akatsuki">
          <h1 className="font-bold px-3 py-2 text-xl hover:bg-zinc-700 hover:rounded-lg mb-4">
            Akatsuki
          </h1>
        </Link>
      </div>
    </div>
  );
}
