import { useEffect, useState } from "react";
import { GetAllClan } from "../api/naruto.api";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "../styles/Pagination.css";

const ClanList = () => {
  const [clans, setClans] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const clansPerPage = 20;

  useEffect(() => {
    async function loadClans(page) {
      const res = await GetAllClan(page + 1);
      console.log(res.data);
      setClans(res.data.clans); // Ajusta según la estructura de res.data
      setPageCount(Math.ceil(res.data.totalClans / clansPerPage)); // Ajusta según el nombre correcto del total
    }
    loadClans(currentPage);
  }, [currentPage]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-2 mb-5 text-center">
        {clans.map((clan) => (
          <div
            key={clan.id}
            className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer rounded-lg"
            onClick={() => navigate(`/clan-detail/${clan.id}`)}
          >
            <h1 className="font-bold uppercase mb-2">{clan.name}</h1>
          </div>
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
};

export default ClanList;
