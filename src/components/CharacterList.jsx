import { useEffect, useState } from "react";
import { NarutoAllCharacters } from "../api/naruto.api";
import { UserCard } from "./UserCard";
import ReactPaginate from "react-paginate";

import "../styles/Pagination.css";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const characterPerPage = 20;

  useEffect(() => {
    async function loadCharacters(page) {
      const res = await NarutoAllCharacters(page + 1);
      setCharacters(res.data.characters);
      setPageCount(Math.ceil(res.data.totalCharacters / characterPerPage)); // Calcular total de páginas
    }
    loadCharacters(currentPage);
  }, [currentPage]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };
  // console.log(characters);
  return (
    <div>
      <div className="grid grid-cols-4 gap-2 mb-5">
        {characters.map((character) => (
          <UserCard key={character.id} character={character} />
        ))}
      </div>
      <div className="m-10">
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={3}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
}
