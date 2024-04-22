
import css from "./ContactList.module.css"
import Contact from "../Contact/Contact"
import { useSelector } from "react-redux"
import { selectFilteredContacts } from '../../redux/filters/selectors';
import { selectContactsIsError, selectContactskIsLoading } from "../../redux/contacts/selectors";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage"






const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectContactskIsLoading)
  const isError = useSelector(selectContactsIsError)

  return (
    <div> 
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ul className={css.listContacts}>

        {filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul></div>


  )
}

export default ContactList


