// import ContactForm from "../ContactForm/ContactForm";
// import ContactList from "../ContactList/ContactList";
// import { Container, Paper } from "@mui/material";
// import Filter from "../Filter/Filter";
// import { useSelector } from "react-redux";

import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../../components/Layout"
import { RestrictedRoute } from "../RestrictedRoute";
import { PrivateRoute } from "../PrivateRoute";

const HomePage = lazy(() =>import("../../pages/Home"));
const RegisterPage = lazy(() =>import("../../pages/Register"));
const LoginPage = lazy(() =>import("../../pages/Login"));
const ContactsPages = lazy(() =>import("../../pages/Contacts"));
const CreateContactsPage = lazy(() =>import("../../pages/CreateContact"));

const App = () => {
  // const { isLoading, error } = useSelector((state) => state.contacts);

  return (
<Routes>
  <Route path="/" element={<Layout/>}>
< Route index element={<RestrictedRoute component={<HomePage/>} redirectTo= "/contacts" />} />
<Route path="register" element={<RestrictedRoute component={<RegisterPage/>} redirectTo="/contacts"/>} />
<Route path="login" element={<RestrictedRoute component={<LoginPage/>} redirectTo="/contacts"/>} />
<Route path="contacts" element={< PrivateRoute component={<ContactsPages/>} redirectTo="/"/>} />
<Route path="create-contacts" element={<PrivateRoute component={<CreateContactsPage/>} redirectTo="/" />} />
  </Route>
</Routes>
    // <Container>
    //   <Paper
    //     sx={{
    //       display: "flex",
    //       alignItems: "center",
    //       flexDirection: "column",
    //       gap: 1,
    //       overflow: "hidden",
    //       mt: 2,
    //       p: 2,
    //     }}
    //   >
    //     <h1>Phonebook</h1>
    //     <Paper sx={{ p: 2 }}>
    //       <ContactForm />
    //     </Paper>
    //     <Paper sx={{ p: 2 }}>
    //       <h2 style={{ display: "flex", justifyContent: "center" }}>
    //         Contacts
    //       </h2>
    //       <Filter />
    //       {isLoading && !error && <p>Feching data...</p>}
    //       <ContactList />
    //     </Paper>
    //   </Paper>
    // </Container>
  );
};

export default App;
