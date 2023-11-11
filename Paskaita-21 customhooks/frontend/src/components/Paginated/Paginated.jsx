import axios from "axios";
import React, { useEffect, useState } from "react";
import { usePaginationPagalUzduoti } from "../../hooks/usePaginate";
import Post from "../Post/Post";

export default function PagalUzduoti() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(({ data }) => setData(data))
      .catch((err) => alert(err.message));
  }, []);

  const paginated = usePaginationPagalUzduoti(data, 5);
  return (
    <div>
      <h1>Pagal užduotį</h1>
      {paginated[currentPage].map((page) => (
        <Post body={page.body} title={page.title} key={`${page.id}2`} />
      ))}
      <button onClick={() => setCurrentPage((prev) => prev - 1)}>
        previous
      </button>{" "}
      {currentPage}{" "}
      <button onClick={() => setCurrentPage((prev) => prev + 1)}>next</button>
    </div>
  );
}

// import { usePaginationMano } from "../../hooks/usePaginate";

// export default function ManoVariantas() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then(({ data }) => setData(data))
//       .catch((err) => alert(err.message));
//   }, []);

//   const { currentPage, handlePageChange, paginatedData } = usePaginationMano(data, 5);

//   return (
//     <div>
//       <hr />
//       <h1>Mano variantas</h1>
//       {paginatedData.map(({ title, body, id }) => (
//         <Post body={body} title={title} key={id} />
//       ))}
//       <button onClick={() => handlePageChange(currentPage - 1)}>previous</button> {currentPage}
//       <button onClick={() => handlePageChange(currentPage + 1)}>next</button>
//       <hr />
//     </div>
//   );
// }
