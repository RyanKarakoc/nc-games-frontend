import { Link } from "react-router-dom";
import SignIn from "./SignIn";

const Header = ({ users, setUsers, signedInAs, setSignedInAs }) => {
  let src = "";

  if (signedInAs.length > 0) {
    src = signedInAs[0].avatar_url;
  } else {
    src = "https://cdn-icons-png.flaticon.com/512/7856/7856156.png";
  }

  return (
    <div className="header">
      <Link to={"/"}>
        <h1 className="NC-games">NC Games</h1>
      </Link>
      <div className="sign-in-area">
        <img
          className="avatar"
          src={src}
          alt="signed in user"
        />
        <SignIn
          users={users}
          setUsers={setUsers}
          setSignedInAs={setSignedInAs}
          signedInAs={signedInAs}
        />
      </div>
    </div>
  );
};

export default Header;
