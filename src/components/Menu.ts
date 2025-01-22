import React from 'react';

const Menu = ({ onSelectLevel }) => {
    const levels = ['N5', 'N4', 'N3', 'N2', 'N1'];

    return (
        <div className="menu">
            <h2>Select JLPT Level</h2>
            <ul>
                {levels.map(level => (
                    <li key={level} onClick={() => onSelectLevel(level)}>
                        {level}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;