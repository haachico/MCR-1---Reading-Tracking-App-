import { createContext, useState } from "react";
import { booksData } from "../db/booksData";

export const BooksContext = createContext();

export const BooksContextProvider = ({ children }) => {
  const [books, setBooks] = useState(booksData);

  const handleSelectCategory = (title, selectedCategory) => {
    setBooks(
      books.map((book) =>
        book.title === title ? { ...book, category: selectedCategory } : book
      )
    );
  };

  const handleDelete = (title) => {
    const updatedBooks = books.filter((book) => book.title !== title);
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  };
  return (
    <div>
      <BooksContext.Provider
        value={{ books, setBooks, handleSelectCategory, handleDelete }}
      >
        {children}
      </BooksContext.Provider>
    </div>
  );
};
