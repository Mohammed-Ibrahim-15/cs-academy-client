import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SideNav = () => {
    const { logIn } = useContext(AuthContext)
    return (
        <div>
            <h2>Side Navigation</h2>
            <button onClick={logIn}>Google</button>
        </div>
    );
};

export default SideNav;