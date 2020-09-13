import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import './Comments.css';

const Comments = () => {
    const {postId} = useParams();
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
    }, []);
    
    return (
        <div>
            <Container className="comments-header" style={{width:'1250px'}}>
                <h2>↓ Comments ↓</h2>
            </Container>
            <Container maxWidth="md" className='comments-wrapper'>
                {
                    comments.map(comment => <Comment key={comment.id} comment={comment} ></Comment>)
                }
            </Container>
        </div>
        
    );
};

export default Comments;