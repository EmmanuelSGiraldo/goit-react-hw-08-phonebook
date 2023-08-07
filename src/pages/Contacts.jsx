import { useDispatch, useSelector } from "react-redux";
import { selectToken, selectUser } from "../redux/auth/selectorauth";
import {
  selectContacts,
  selectIsLoading,
} from "../redux/contacts/selectorContacts";
import { Container, Paper } from "@mui/material";
import ContactForm from "../components/ContactForm/ContactForm";
import Filter from "../components/Filter/Filter"
import ContactList from "../components/ContactList/ContactList";


const Contacts = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  // const { isLoading, error } = useSelector((state) => state.contacts);

  return (
    <>
      <Container>
        <Paper
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: 1,
            overflow: "hidden",
            mt: 2,
            p: 2,
          }}
        >
          <h1>Phonebook</h1>
          <Paper sx={{ p: 2 }}>
            <ContactForm />
          </Paper>
          <Paper sx={{ p: 2 }}>
            <h2 style={{ display: "flex", justifyContent: "center" }}>
              Contacts
            </h2>
            <Filter />
            {/* {isLoading && !error && <p>Feching data...</p>} */}
            <ContactList />
          </Paper>
        </Paper>
      </Container>
    </>
  );
};

export default Contacts;
