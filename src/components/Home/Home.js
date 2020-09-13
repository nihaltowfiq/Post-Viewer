import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);
    return (
        <Container style={{padding:'20px', marginTop: '50px'}}>
            <h2 style={{textAlign:'center', marginTop:'10px'}}>Total Posts: {posts.length}</h2>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </Container>
    );
};

export default Home;