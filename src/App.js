import React from "react";
import "./App.css";
import Contact from "./components/Contact.js";
import users from "./components/ContactList";

function App() {
  return (
    <div>
      {users.map(user => (
        <Contact name={user.name} picture={user.picture} status={user.status} />
      ))}
    </div>
  );
}

export default App;
