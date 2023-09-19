import { Route, Routes } from "react-router-dom";
import { Layout } from "components/Layout/Layout";
import Home from 'Pages/Home';
import AddContacts from 'Pages/AddContacts/AddContacts';
import ContactDetails from "Pages/ContactDetails/ContactDetails";
import  PhoneView  from "Pages/PhoneView/PhoneView";
import  ContactEdit  from "Pages/ContactEdit/ContactEdit";



export const App = () => {
    
    return (
      <>
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route index element={ <Home /> } />
            <Route path="contact/:id" element={ <ContactDetails /> } >
              <Route index element={ <PhoneView/>} />
              <Route path="edit" element={ <ContactEdit/>} />
            </Route>
            <Route path="addContact" element={ <AddContacts />} />
          </Route>
        </Routes>
      </>
    )
}