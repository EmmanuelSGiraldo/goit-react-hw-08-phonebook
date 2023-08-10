import { Suspense } from "react";
import NavBar from "./NavBar/NavBar";
import { Outlet } from "react-router-dom";
import LoadingPage from "../pages/Loading";
import { Container, CssBaseline, Box, Typography, Link } from "@mui/material";

const Layout = () => {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <Box
        sx={{
          maxWidth: "70%",
          margin: "0 auto",
          marginTop: "20px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        <Suspense fallback={<LoadingPage />}>
          <Outlet />
        </Suspense>
      </Box>
      <Box
        component="footer"
        sx={{
          maxWidth: "70%",
          margin: "20px auto",
          padding: "10px",
          background: "#F5F5F5",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" color="textSecondary">
          Developed by{" "}
          <Link href="https://github.com/esgg1?tab=repositories" color="primary">
            EmmanuelS Giraldo   © 2023 
          </Link>
        </Typography>
      </Box>
    </>
  );
};

export default Layout;
