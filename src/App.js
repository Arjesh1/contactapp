import Recat from "react"
import './App.css';
import Header from "./components/Header"
import AddContact from "./components/AddContact"
import ContactList from "./components/ContactList"

function App() {

  const contacts = [
    {
      id: "1",
      "name": "Arjesh",
      "email": "arjesh@gmail.com"
    },

    {
      id: "2",
      "name": "Arpana",
      "email": "arpana@gmail.com"
    }
  ]
  return (
    <div className="ui container">

      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
      
    </div>
  );
}

export default App;
