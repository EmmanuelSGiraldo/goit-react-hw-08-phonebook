import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField } from "@mui/material";
import { selectContacts, selectIsLoading } from "../../redux/contacts/selectorContacts";
import { addContact } from "../../redux/contacts/contactOperations";
import { Alert } from "@mui/material";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    let contactForAdd = { name: form.name.value, number: form.number.value };
    console.log("Form ", contactForAdd);
    if (contacts.some(({ name }) => name === contactForAdd.name)) {
      // Usar una alerta de MUI en lugar de un alert del navegador
      Alert.error(`${contactForAdd.name} is already in contacts`);
      return;
    }
    dispatch(addContact(contactForAdd));
    form.reset();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "20px",
      }}
    >
      <form onSubmit={handleSubmit} style={{ width: "60%", maxWidth: "500px" }}>
        <TextField
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          label="Name"
          variant="outlined"
          size="small"
          fullWidth
          style={{ marginBottom: "10px" }}
        />
        <TextField
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          label="Phone: example 123-45-78"
          variant="outlined"
          size="small"
          fullWidth
          style={{ marginBottom: "10px" }}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          style={{
            marginTop: "20px",
            backgroundColor: "#888888", // Cambio del color de fondo a un tono de gris
            color: "white",
            minWidth: "120px",
            maxWidth: "200px",
            fontSize: "16px",
          }}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Add contact"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
