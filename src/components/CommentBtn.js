import React, { useState } from 'react'
import styled from 'styled-components'
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PostViewer from './PostViewer';
import { updatePostViewerDocId } from '../features/postviewerSlice';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

function CommentBtn({email, postId}) {
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
        <CommentBtnContainer>
            <ChatBubbleOutlineIcon onClick={()=>{
                dispatch(updatePostViewerDocId({email: email, postId: postId}));
                handleToggle();
            }}/>
        </CommentBtnContainer>
        {open &&
            <Backdrop className={classes.backdrop} open={open}>
                <PostViewer closeAction={handleClose}/>
            </Backdrop>
        }
        </>
    )
}

export default CommentBtn

const CommentBtnContainer = styled.div`
    > .MuiSvgIcon-root {
        :hover {
            cursor: pointer;
            color: var(--ig-lpurple);
        }
    }
`;