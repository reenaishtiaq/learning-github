import React from 'react';
import './email.css';

const Email = (props) => {
    return (
        <div className="emailBody">
            <span>{props.letter}</span><div className="bodyPart"><h4>{props.name}</h4><p>{props.subj}</p><p>{props.text}</p></div>
        </div>
    );
};

export default Email;