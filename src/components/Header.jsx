import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to={"/"}>
      <h1 className="header">NC Games</h1>
    </Link>
  );
};

export default Header;
