import React from 'react';
import './Icon.jsx';
import './nav.css';


const Icon = (props) => {
    return (
        <div className="Icon">
            <button>{props.symbol}</button>
        </div>
    );
};

export default Icon;