import React, { useState } from 'react'
import styled from 'styled-components'
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import PostViewer from './PostViewer';
import { updatePostViewerDocId } from '../features/postviewerSlice';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

function ImageWrapper({
    imageURL,
    email,
    postId,
    timestamp
}) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    return (
        <>
        <ImageWrapperContainer onClick={()=>{
            dispatch(updatePostViewerDocId({email: email, postId: postId}));
            handleToggle();
        }}>
            <img src={imageURL} alt=""/>
        </ImageWrapperContainer>
        {open &&
            <Backdrop className={classes.backdrop} open={open}>
                <PostViewer closeAction={handleClose}/>
            </Backdrop>
        }
        </>
    )
}

export default ImageWrapper

const ImageWrapperContainer = styled.label`
    overflow: hidden;
    height: 320px;
    width: 320px;
    
    > img {
        opacity: 0.8;
        min-width: 100%;
        height: 100%;
        top: 0;
        left: 0;

        :hover {
            cursor: pointer;
            opacity: 1;
        }
    }
`;