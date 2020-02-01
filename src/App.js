import React from "react";
import "./App.css";
import Contact from "./components/Contact.js";

const users = [
  {
    name: "Brand Gibson",
    picture: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
    status: true
  },
  {
    name: "Laurie Campbell",
    picture: "https://randomuser.me/api/portraits/thumb/women/18.jpg",
    status: false
  },
  {
    name: "Yasemin Duygulu",
    picture: "https://randomuser.me/api/portraits/thumb/women/70.jpg",
    status: true
  }
];

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
