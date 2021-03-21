import React from 'react'
import styled from 'styled-components'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { useSelector } from 'react-redux';
import { getCurrentUserEmail } from '../features/userSlice';
import { savePost, unsavePost } from '../actions/SaveActions';

function SaveBtn({usersSaved, email, postId}) {
    const currentUserEmail = useSelector(getCurrentUserEmail);
    const saved = usersSaved?.includes(currentUserEmail);
    return (
        <SaveBtnContainer>
            {saved ? (
                <PostSaved onClick={()=>{unsavePost(email, postId, currentUserEmail)}}/>
            ):(
                <PostNotSaved onClick={()=>{savePost(email, postId, currentUserEmail)}}/>
            )}
        </SaveBtnContainer>
    )
}

export default SaveBtn

const SaveBtnContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const PostSaved = styled(BookmarkIcon)`
    color: var(--ig-yellow);
    :hover {
        cursor: pointer;
    }
`;
const PostNotSaved = styled(BookmarkBorderIcon)`
    color: white;
    :hover {
        cursor: pointer;
        color: var(--ig-lpurple);
    }
`;