import React from 'react'
import styled from 'styled-components'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useSelector } from 'react-redux';
import { getCurrentUserEmail } from '../features/userSlice';
import { likePost, unlikePost } from '../actions/LikeActions';

function LikeBtn({usersLiked, email, postId}) {
    const currentUserEmail = useSelector(getCurrentUserEmail);
    const liked = usersLiked.includes(currentUserEmail);
    return (
        <LikeBtnContainer>
            {liked ? (
                <PostLiked onClick={()=>{
                    unlikePost(email, postId, currentUserEmail);
                }}/>
            ):(
                <PostNotLiked onClick={()=>{
                    likePost(email, postId, currentUserEmail);
                }}/>
            )}
        </LikeBtnContainer>
    )
}

export default LikeBtn

const LikeBtnContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const PostLiked = styled(FavoriteIcon)`
    color: var(--ig-lpurple);
    :hover {
        cursor: pointer;
    }
`;
const PostNotLiked = styled(FavoriteBorderIcon)`
    color: white;
    :hover {
        color: var(--ig-lpurple);
        cursor: pointer;
    }
`;