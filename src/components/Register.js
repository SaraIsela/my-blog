import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', { username, password });
            alert(response.data.message);
        } catch (error) {
            alert(error.response.data.error);
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <input type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Registrarse</button>
        </form>
    );
}

export default Register;
