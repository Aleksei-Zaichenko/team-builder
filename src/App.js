import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Members from './Members';

function App() {

  const [teamMembersList, setTeamMembersList] = useState([
    { 
      name: "Geico", 
      email: "geico@geico.geico",
      role: "insurance agent"
    }
  ]);

  const addNewTeamMember = teamMember =>{
    const newTeamMember = {
      id: Date.now(),
      name: teamMember.name,
      email: teamMember.email,
      role: teamMember.role
    };
    setTeamMembersList([...teamMembersList,newTeamMember])
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form addNewTeamMember ={addNewTeamMember} />
        <Members teamMembersList ={teamMembersList} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
