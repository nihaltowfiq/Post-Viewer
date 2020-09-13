import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const useStyles = makeStyles({
    root: {
      maxWidth: 1300,
    },
  });

const PostDetail = () => {
    const classes = useStyles();
    const cardStyle = {
        margin:'50px', padding:'20px', marginBottom:'0px', borderRadius: '5px 5px 0 0'
    }

    const {postId} = useParams();

    const [post, setPost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, []);

    const {id, title, body} = post;
    
    return (
        <div style={{paddingTop:'50px'}}>
            <Card className={classes.root} style={cardStyle}>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="body2" component="p">POST: {id}</Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="h6" color="primary" component="p">
                            {body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Comments></Comments>
        </div>
    );
};

export default PostDetail;