import React, {useState} from 'react';
function Form(props){

    const [teamMember, setTeamMember] = useState({
        name: "",
        email: "",
        role: ""
    })

    const handleChange = event => {
        setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
    };
    
    const submitForm = event => {
        event.preventDefault();
        props.addNewTeamMember(teamMember); 
        setTeamMember({name: "", email: "", role: ""})
    };

    return(
        <form onSubmit ={submitForm}>
            <label htmlFor ="teamMemberName">Name</label>
            <input 
                id = "teamMemberName"
                type = "text"
                name = "name"
                placeholder = "name"
                value = {teamMember.name}
                onChange ={handleChange}
            />
            <label htmlFor ="teamMemberEmail">Email</label>
            <input 
                id = "teamMemberEmail"
                type = "email"
                name = "email"
                placeholder = "email"
                value = {teamMember.email}
                onChange ={handleChange}
            />
            <label htmlFor ="teamMemberRole">Role</label>
            <input 
                id = "teamMemberRole"
                type = "text"
                name = "role"
                placeholder = "role"
                value = {teamMember.role}
                onChange ={handleChange}
            />
            <button type ="submit">Add team member</button>
        </form>
    );
}

export default Form;
