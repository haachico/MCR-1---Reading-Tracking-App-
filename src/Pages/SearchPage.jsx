import { useContext, useEffect, useState } from "react";
import { BooksContext } from "..";
import Book from "../Components/Book";
import Modal from "../Modal";

const SearchPage = () => {
  const { books, setBooks, handleSelectCategory, handleDelete } = useContext(
    BooksContext
  );
  const [searchText, setSearchText] = useState("");
  const [book, setBook] = useState({
    coverImg: "",
    title: "",
    author: "",
    category: ""
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    console.log("clicked");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const searchedBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchText.toLowerCase())
  );
  const handleChange = (e) => {
    const { name, value } = e.target;

    setBook((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  const handleAddBook = () => {
    if (!book.title) return;
    if (!book.author) return;
    if (!book.category) return;

    const newBook = {
      coverImg: book.coverImg,
      title: book.title,
      author: book.author,
      category: book.category
    };

    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
    setIsModalOpen(false);
  };

  useEffect(() => {
    const storedBooks = localStorage.getItem("books");
    if (searchedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  return (
    <div>
      <input
        placeholder="Search with title"
        text="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="search--input"
      />
      <div>
        <button onClick={openModal} className="addBook--btn">
          Add a book +{" "}
        </button>
      </div>
      <div className="list">
        {searchedBooks.length > 0 ? (
          searchedBooks.map(({ coverImg, title, author, category }) => (
            <Book
              coverImg={coverImg}
              title={title}
              author={author}
              key={title}
              category={category}
              onHandleSelectCategory={handleSelectCategory}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <h4>No book found with such title. :(</h4>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="modal--div">
          <h3>Add a book.</h3>
          <label htmlFor="cover">Cover : </label>
          <input
            name="coverImg"
            value={book.coverImg}
            id="cover"
            onChange={(e) => handleChange(e)}
            placeholder="Post an image link here."
          />

          <label htmlFor="title"> * Title : </label>
          <input
            id="title"
            name="title"
            value={book.title}
            onChange={(e) => handleChange(e)}
            placeholder="Post book's title here."
          />

          <label htmlFor="author"> * Author : </label>
          <input
            id="author"
            name="author"
            value={book.author}
            onChange={(e) => handleChange(e)}
            placeholder="Post author's name here."
          />

          <label>* Category: </label>
          <select
            name="category"
            value={book.category}
            onChange={(e) => handleChange(e)}
          >
            <option value="Currently Reading">Currently Reading</option>
            <option value="Want To Read">Want To Read</option>
            <option value="Read">Read</option>
          </select>

          <button onClick={handleAddBook}>Add</button>
        </div>
      </Modal>
    </div>
  );
};

export default SearchPage;
