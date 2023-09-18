import { ContactsForm } from '../ContactsForm/ContactsForm';
import { ContactList } from '../ContactsList/ContactsList';

import { Route, Routes } from "react-router-dom";
import { Layout } from "components/Layout/Layout";
import Home from 'Pages/Home';



export const App = () => {
    
    return (
      <>
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route index element={ <Home /> } />
            <Route path="addContact" element={ <ContactsForm />} />
          </Route>
        </Routes>
      </>
    )
}