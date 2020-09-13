import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
      maxWidth: 1300,
    },
  });

const Post = (props) => {
    const {id, title} = props.post;
    const classes = useStyles();
    const cardStyle = {
        margin:'20px', padding:'20px'
    }
    const history = useHistory();
    const handleMoreDetails = postId => {
        history.push(`/post/${postId}`)
    }
    return (
        <Card className={classes.root} style={cardStyle}>
            <CardActionArea>
                <CardContent>
                    <Typography variant="body2" component="p">POST: {id}</Typography>
                    <Typography gutterBottom variant="h4" component="h2">
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={() => handleMoreDetails(id)} variant="contained" size="medium" color="primary" style={{background:'#4267B2'}}>
                    See Full Post
                </Button>
            </CardActions>
        </Card>
    );
};

export default Post;