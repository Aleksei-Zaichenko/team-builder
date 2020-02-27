import React from 'react';

const Members = props => {
    return(
        <div className = "teamMembers-list">
            {props.teamMembersList.map(member => (
                <div className = "member" key={member.id}>
                    <h2>Name: {member.name}</h2>
                    <h3>Email: {member.email}</h3>
                    <h4>Role: {member.role}</h4>
                </div>
            ))}
        </div>
    );
};

export default Members;