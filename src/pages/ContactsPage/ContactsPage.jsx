
import css from "../../pages/ContactsPage/ContactsPage.module.css"
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBar from "../../components/SearchBar/SearchBar";
import ContactList from "../../components/ContactList/ContactList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { apiGetUserContacts } from "../../redux/contacts/operations";

const ContactsPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(apiGetUserContacts())
  }, [])

  return (
    < >
      <ContactForm />
      <SearchBar />
      <ContactList />
    </>
  );
};

export default ContactsPage;