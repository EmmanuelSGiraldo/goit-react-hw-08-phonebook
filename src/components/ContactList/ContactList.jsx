import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { EditModal } from "../Modal/Modal";
import {
  selectContacts,
  selectVisibleContacts,
} from "../../redux/contacts/selectorContacts";
import {
  deleteContact,
  fetchContacts,
} from "../../redux/contacts/contactOperations";
import { SelectFilter } from "../../redux/filter/selectorFilter";
import css from "./ContactList.module.css";

const ContactList = ({ id, name, number }) => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(SelectFilter);
  const dispatch = useDispatch();
  const [showModalId, setShowModalId] = useState(null);

  const deleteId = (contacts) => {
    dispatch(deleteContact(contacts));
  };

  const toggleModal = (contactId) => {
    setShowModalId(contactId === showModalId ? null : contactId);
  };

  const filterArr = (fArr) => {
    let newArr = fArr.filter((cur) => cur.name.toUpperCase().includes(filter));
    return newArr;
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {filterArr(contacts)?.map(({ name, number, id }) => {
          return (
            <div className={css["container-contact"]} key={id}>
              <li>
                {name}: {number}
              </li>
              <div>
                <IconButton
                  className={css["delete-contact"]}
                  data-id={id}
                  onClick={() => deleteId(id)}
                  edge="end"
                >
                  <DeleteIcon />
                </IconButton>

                <IconButton
                  className={css["delete-contact"]}
                  data-id={id}
                  onClick={() => toggleModal(id)} // Pass the contact id to toggleModal
                  edge="end"
                >
                  <EditIcon />
                </IconButton>

                {showModalId === id && ( // Only show the modal if showModalId matches the contact id
                  <EditModal
                    onClose={() => toggleModal(id)} // Pass the contact id to onClose
                    id={id}
                    name={name}
                    number={number}
                    isOpen={true}
                  />
                )}
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
