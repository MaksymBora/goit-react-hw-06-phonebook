import { Route, Routes } from "react-router-dom";
import { Layout } from "components/Layout/Layout";
import Home from 'Pages/Home';
import AddContacts from 'Pages/AddContacts';
import ContactDetails from "Pages/ContactDetails";



export const App = () => {
    
    return (
      <>
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route index element={ <Home /> } />
            <Route path=":contactId" element={ <ContactDetails/> } />
            <Route path="addContact" element={ <AddContacts />} />
          </Route>
        </Routes>
      </>
    )
}