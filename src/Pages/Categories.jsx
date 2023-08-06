import { useContext } from "react";
import { BooksContext } from "..";
import Book from "../Components/Book";

const Categories = () => {
  const { books, handleSelectCategory, handleDelete } = useContext(
    BooksContext
  );

  const currentlyReadingBooks = books?.filter(
    (book) => book.category === "Currently Reading"
  );

  const wantToReadBooks = books?.filter(
    (book) => book.category === "Want To Read"
  );

  const readBoooks = books?.filter((book) => book.category === "Read");

  return (
    <div>
      <div className="category--title">
        <h3>Currently Reding</h3>
      </div>
      <div className="list">
        {currentlyReadingBooks.length > 0 ? (
          currentlyReadingBooks?.map(
            ({ coverImg, title, author, category }) => (
              <Book
                coverImg={coverImg}
                title={title}
                author={author}
                key={title}
                category={category}
                onHandleSelectCategory={handleSelectCategory}
                onDelete={handleDelete}
              />
            )
          )
        ) : (
          <h4>No books here. :(</h4>
        )}
      </div>

      <div className="category--title">
        <h3>Want To Read</h3>
      </div>
      <div className="list">
        {wantToReadBooks.length > 0 ? (
          wantToReadBooks?.map(({ coverImg, title, author, category }) => (
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
          <h4>No books here. :(</h4>
        )}
      </div>

      <div className="category--title">
        <h3>Read</h3>
      </div>
      <div className="list">
        {readBoooks.length > 0 ? (
          readBoooks?.map(({ coverImg, title, author, category }) => (
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
          <h4>No books here. :(</h4>
        )}
      </div>
    </div>
  );
};

export default Categories;
