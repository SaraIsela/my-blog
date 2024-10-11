import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Main() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Hubo un error al obtener los posts!', error);
            });
    }, []);

    return (
        <main>
            {posts.map((post, index) => (
                <section key={index}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </section>
            ))}
        </main>
    );
}

export default Main;
