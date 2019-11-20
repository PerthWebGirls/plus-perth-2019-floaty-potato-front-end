import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});

const ImageAvatars = ({ image, ...props }) => { 
  const classes = useStyles();
  return (
    
      <Avatar alt="Remy Sharp" src={image} className={classes.avatar} />
    
  );
}
export default ImageAvatars;