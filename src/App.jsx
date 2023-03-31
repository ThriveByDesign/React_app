import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router";
// import React, { useState } from 'react';
// // import reactRedux from "./components/Book Search/react-redux";
// // import { useSelector, useDispatch } from 'react-redux';
// // import { searchBooks } from './actions';
// // import BookList from './BookList';
// import './App.css'

// function App() {
//   const dispatch = useDispatch();
//   const books = useSelector((state) => state.books);
//   const [query, setQuery] = useState('');

//   const handleSearch = (event) => {
//     event.preventDefault();
//     dispatch(searchBooks(query));
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSearch}>
//         <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} />
//         <button type="submit">Search</button>
//       </form>
//       {books.length > 0 ? <BookList books={books} /> : null}
//     </div>
//   );

//   return (
//     <div className="App">
//       {/* navbar */}
//       <Navbar />
//       <Outlet />


//     </div>
//   );
// }

// export default App;



import React from 'react'

function App() {
  return (
    <div>
   <Navbar />
  <Outlet />

    </div>
  )
}

export default App

