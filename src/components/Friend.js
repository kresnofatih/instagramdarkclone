import React from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { useSelector } from 'react-redux';
import { followUser, getCurrentUser, unfollowUser } from '../features/userSlice';

function Friend({email, displayName, photoURL}) {
    const currentUser = useSelector(getCurrentUser);
    return (
        <FriendContainer>
            <FriendLeft>
                <FriendAvatar src={photoURL} alt=""/>
                <FriendLeftInfo>
                    <h3>{displayName}</h3>
                    <p>{displayName}</p>
                </FriendLeftInfo>
            </FriendLeft>
            {currentUser.following.includes(email) ? (
                <FriendRight onClick={()=>{unfollowUser(email, currentUser.email)}}>
                    unfollow
                </FriendRight>
            ):(
                <FriendRight onClick={()=>{followUser(email, currentUser.email)}}>
                    follow
                </FriendRight>
            )}
        </FriendContainer>
    )
}

export default Friend

const FriendContainer = styled.div`
    padding: 10px 0;
    background-color: var(--ig-ddgray);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const FriendLeft = styled.div`
    margin-left: 10px;
    display: flex;
    align-items: center;
`;

const FriendLeftInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;

    > h3 {
        font-size: 14px;
        font-weight: 400;
    }
    > p {
        font-size: 14px;
        font-weight: 200;
        color: gray;
    }
`;

const FriendAvatar = styled(Avatar)`
    :hover {
        cursor: pointer;
    }
`;

const FriendRight = styled.label`
    margin-right: 10px;
    font-size: 12px;
    border-radius: 5px;
    padding: 5px;
    border: 1px solid white;

    :hover {
        border: 1px solid var(--ig-lpurple);
        color: var(--ig-lpurple);
        cursor: pointer;
    }

    > .MuiSvgIcon-root {
        :hover {
            cursor: pointer;
            color: var(--ig-dorange);
        }
    }
`;