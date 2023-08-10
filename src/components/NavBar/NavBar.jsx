import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectorauth";
import { logout } from "../../redux/auth/operationsAuth";
import { useAuth } from "../../hooks";
import { AppBar, Toolbar, Typography, Button, Link, Container, Grid } from "@mui/material";

const NavBar = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <AppBar position="static" sx={{ background: "#484441", maxWidth: "70%", margin: "0 auto" }}>
      <Container maxWidth="lg">
        <Toolbar>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h6">
                <Link
                  component={NavLink}
                  to={isLoggedIn ? "/contacts" : "/"}
                  underline="none"
                  color="inherit"
                  sx={{
                    textDecoration: "none",
                    transition: "color 0.3s",  // Agregar una transición suave
                    "&:hover": {
                      color: "#3498db",  // Cambiar el color de texto en hover
                    },
                  }}
                >
                  PHONEBOOK
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              {isLoggedIn ? (
                <>
                  <Typography variant="subtitle1" sx={{ color: "#FFFFFF" }}>
                    {user.name}
                  </Typography>
                  <Button
                    onClick={handleLogout}
                    color="primary"
                    sx={{ cursor: "pointer", color: "#3498db" }}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    component={NavLink}
                    to="/register"
                    color="inherit"
                    sx={{
                      textDecoration: "none",
                      transition: "color 0.3s",  // Agregar una transición suave
                      "&:hover": {
                        color: "#3498db",  // Cambiar el color de texto en hover
                      },
                    }}
                  >
                    Register
                  </Button>
                  <Button
                    component={NavLink}
                    to="/login"
                    color="inherit"
                    sx={{
                      textDecoration: "none",
                      transition: "color 0.3s",  // Agregar una transición suave
                      "&:hover": {
                        color: "#3498db",  // Cambiar el color de texto en hover
                      },
                    }}
                  >
                    Login
                  </Button>
                </>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
