import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectorauth";
import { logout } from "../../redux/auth/operationsAuth";
import { useAuth } from "../../hooks";
// import { userLogout } from "../../redux/auth/slice";

const NavBar = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const { isLoggedIn } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <header
      style={{
        border: "1px solid black",
        padding: "0 18px",
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          height: 50,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 15,
          }}
        >
          <h2>
            {" "}
            <NavLink
              to={isLoggedIn ? "/contacts" : "/"}
              style={{ textDecoration: "none", color: "unset" }}
            >
              My Contact App
            </NavLink>
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            gap: 15,
            alignItems: "center",
          }}
        >
          {isLoggedIn ? (
            <>
              <p>
                {user.name}
              </p>
            <h3 onClick={handleLogout} style={{ cursor: "pointer" }}>
              Logout
            </h3>
            </>
          ) : (
            <>
              <h3>
                <NavLink
                  to="/register"
                  style={{ textDecoration: "none", color: "unset" }}
                >
                  Register
                </NavLink>
              </h3>
              <h3>
                <NavLink
                  to="/login"
                  style={{ textDecoration: "none", color: "unset" }}
                >
                  Login
                </NavLink>
              </h3>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
