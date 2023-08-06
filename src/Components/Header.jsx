import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h2>My Reading Tracker</h2>{" "}
      </Link>
      <div className="nav">
        <NavLink to="/">Progress</NavLink>
        <NavLink to="/search">All books</NavLink>
      </div>
    </div>
  );
};

export default Header;
