import { useEffect, useState } from "react";
import { GetAllAkatsuki } from "../api/naruto.api";
import ReactPaginate from "react-paginate";
import { UserCard } from "./UserCard";
import "../styles/Pagination.css";

export function AkatsukiList() {
  const [characters, setCharacters] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const characterPerPage = 20;

  useEffect(() => {
    async function loadCharacters(page) {
      const res = await GetAllAkatsuki(page + 1);
      // console.log(res.data.akatsuki);
      setCharacters(res.data.akatsuki);
      setPageCount(Math.ceil(res.data.totalMembers / characterPerPage));
    }
    loadCharacters(currentPage);
  }, [currentPage]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

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
