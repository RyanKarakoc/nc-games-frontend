import { useEffect } from "react";
import { fetchUsers } from "../api";

const SignIn = ({ users, setUsers, signedInAs, setSignedInAs }) => {
  useEffect(() => {
    fetchUsers().then((response) => {
      setUsers(response);
    });
  }, [setUsers]);

  const handleSignOut = (event) => {
    event.preventDefault();
    setSignedInAs([]);
  };

  return (
    <div>
      <select
        className="sign-in"
        onChange={(event) => {
          setSignedInAs(
            users.filter((user) => {
              if (user.username === event.target.value) {
                return user;
              }
            })
          );
        }}
      >
        <option disabled selected value></option>
        {users.map((user) => {
          return (
            <option key={user.user_id} value={user.userName}>
              {user.username}
            </option>
          );
        })}
      </select>
      {signedInAs.length > 0 ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button>Sign In</button>
      )}
    </div>
  );
};

export default SignIn;
