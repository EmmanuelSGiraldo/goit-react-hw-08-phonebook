import { useDispatch, useSelector } from "react-redux";
import { selectIsAuthLoading } from "../redux/auth/selectorauth";
import { login } from "../redux/auth/operationsAuth";
import { Notify } from "notiflix";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsAuthLoading);

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const credentials = {
      email: email.value,
      password: password.value,
    };

    if (email.value && password.value) {
      dispatch(login(credentials));
      Notify.success("Congrats! You have been logged in.");
    } else {
      Notify.failure("Please verify the provided information and try again.");
    }
    console.log(credentials);
  };

  return (
    <div
      style={{
        height: "calc(100vh - 50px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#F5F5F5", 
      }}
    >
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <Card
        sx={{
          width: "50%",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        <CardContent>
          <form onSubmit={handleLogin}>
            <TextField
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{
                marginTop: "20px",
                backgroundColor: "#484441",
                color: "white",
              }}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Send"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
