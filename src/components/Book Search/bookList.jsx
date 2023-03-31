import React from 'react';

function BookList({ books }) {
  return (
    <div className="BookList">
      {books.map((book) => (
        <div key={book.id}>
          <h2>{book.volumeInfo.title}</h2>
          <p>{book.volumeInfo.authors.join(', ')}</p>
          <p>{book.volumeInfo.publishedDate}</p>
          <p>{book.volumeInfo.publisher}</p>
          <p>{book.volumeInfo.description}</p>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
        </div>
      ))}
    </div>
  );
}

export default BookList;