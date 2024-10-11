import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
            alert('Inicio de sesión exitoso');
            localStorage.setItem('token', response.data.token);
        } catch (error) {
            alert(error.response.data.error);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Iniciar Sesión</button>
        </form>
    );
}

export default Login;
