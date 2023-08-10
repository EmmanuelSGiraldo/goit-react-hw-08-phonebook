import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { register } from "../redux/auth/operationsAuth";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { selectIsAuthLoading } from "../redux/auth/selectorauth";
import { Button, Card, CardContent, TextField, Typography } from "@mui/material";

const Register = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsAuthLoading);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    const credentials = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    if (name.value && email.value && password.value) {
      dispatch(register(credentials));
      Notify.success("Congratulations! You have been registered.");
    } else {
      Notify.failure("Please verify the provided information and try again.");
    }
    console.log(credentials);
  };

  return (
    <div
      style={{
        minHeight: "calc(100vh - 50px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#F5F5F5",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Register
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
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />
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
                backgroundColor: "#484441", // Cambio del color de fondo
                color: "white", // Cambio del color de texto
                minWidth: "120px", // Ancho mínimo del botón
                maxWidth: "200px", // Ancho máximo del botón
                fontSize: "16px", // Tamaño de fuente más modesto
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

export default Register;
