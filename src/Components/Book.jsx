const Book = ({
  coverImg,
  title,
  author,
  category,
  onHandleSelectCategory,
  onDelete
}) => {
  return (
    <div className="book">
      <span onClick={() => onDelete(title)}>
        <i class="fa-solid fa-trash"></i>
      </span>
      <img
        src={
          coverImg ||
          "https://www.boldstrokesbooks.com/assets/bsb/images/book-default-cover.jpg"
        }
        alt={title}
      />
      <div className="book--details">
        <h5>{title}</h5>
        <p>{author}</p>
        <select
          value={category}
          onChange={(e) => onHandleSelectCategory(title, e.target.value)}
        >
          <option value="Currently Reading">Currently Reading</option>
          <option value="Want To Read">Want To Read</option>
          <option value="Read">Read</option>
        </select>
      </div>
    </div>
  );
};

export default Book;
