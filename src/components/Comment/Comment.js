import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Comment.css';

const useStyles = makeStyles({
    root: {
      maxWidth: 1000,
    },
  });

const Comment = (props) => {
    const {email, body} = props.comment;
    const classes = useStyles();

    const [pic, setPic] = useState('')

    const [commenter, setCommenter] = useState('')

    useEffect(() => {
        fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data => {
            setPic(data.results[0].picture.large);
            const fullName = data.results[0].name.first + ' ' + data.results[0].name.last;
            setCommenter(fullName)
        })
    }, [])
    return (
        <Container maxWidth='md'>
            <div style={{padding:'5px'}}>
                <Card className={classes.root} style={{padding:'10px'}}>
                    <CardActionArea>
                        <CardContent>
                            <div className='comment-area-wrapper'>
                                <div className='comment-area-image'>
                                    <img src={pic} alt=""/>
                                </div>
                                <div>
                                    <Typography gutterBottom variant="h6" component="h1">
                                        {commenter}
                                    </Typography>
                                    <Typography gutterBottom variant="body1" component="p" color="error">
                                        {email}
                                    </Typography>
                                </div>
                            </div>
                            <Typography variant="h6" color="textPrimary" component="p">
                                {body}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </Container>
    );
};

export default Comment;