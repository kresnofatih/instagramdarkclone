import React from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';
import { getCurrentFriend } from '../features/friendSlice';

function UserProfileBox() {
    const currentFriend = useSelector(getCurrentFriend);
    return (
        <UserProfileBoxContainer>
            <UserProfileBoxAvatar
                src={currentFriend.photoURL}
                alt=""
            />
            <UserProfileBoxInfo>
                <h2>{currentFriend.displayName}</h2>
                <UserProfileBoxStats>
                    <h3>{currentFriend.numOfPosts} <p>posts</p></h3>
                    <h3>{currentFriend.followers.length} <p>followers</p></h3>
                    <h3>{currentFriend.following.length} <p>following</p></h3>
                </UserProfileBoxStats>
                <UserProfileBoxBio>
                    {currentFriend.bio}
                </UserProfileBoxBio>
            </UserProfileBoxInfo>
        </UserProfileBoxContainer>
    )
}

export default UserProfileBox

const UserProfileBoxContainer = styled.div`
    display: flex;
    padding: 20px 0;

    > .MuiAvatar-root {
        height: 100px;
        width: 100px;
    }
`;

const UserProfileBoxInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;

    > h2 {
        margin-bottom: 5px;
        display: flex;
        align-items: center;

        > .MuiSvgIcon-root {
            margin-left: 10px;
            color: var(--ig-yellow);
            font-size: 16px;
            
            :hover {
                cursor: pointer;
                color: var(--ig-lpurple);
            }
        }
    }
`;

const UserProfileBoxStats = styled.div`
    display: flex;
    padding: 5px 0;

    > h3 {
        display: flex;
        margin-right: 20px;
        color: var(--ig-lpurple);
        font-weight: 700;

        > p {
            margin-left: 5px;
            font-weight: 200;
        }
    }
`;

const UserProfileBoxAvatar = styled(Avatar)`
    :hover {
        cursor: pointer;
    }
`;

const UserProfileBoxBio = styled.div`
    font-size: 14px;
    font-weight: 200;
    overflow-y: hidden;
    height: 50px;
    width: 600px;
`;