import React from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../features/userSlice';

function ProfileBox() {
    const currentUser = useSelector(getCurrentUser);
    return (
        <ProfileBoxContainer>
            <ProfileBoxAvatar 
                src={currentUser.photoURL} 
                alt=""
            />
            <ProfileBoxInfo>
                <h2>{currentUser.displayName}<EditIcon/></h2>
                <ProfileBoxStats>
                    <h3>{currentUser.numOfPosts} <p>posts</p></h3>
                    <h3>{currentUser.followers.length} <p>followers</p></h3>
                    <h3>{currentUser.following.length} <p>following</p></h3>
                </ProfileBoxStats>
                <ProfileBoxBio>
                    {currentUser.bio}
                </ProfileBoxBio>
            </ProfileBoxInfo>
        </ProfileBoxContainer>
    )
}

export default ProfileBox

const ProfileBoxContainer = styled.div`
    display: flex;
    padding: 20px 0;

    > .MuiAvatar-root {
        height: 100px;
        width: 100px;
    }
`

const ProfileBoxInfo = styled.div`
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

const ProfileBoxStats = styled.div`
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
`

const ProfileBoxAvatar = styled(Avatar)`
    :hover {
        cursor: pointer;
    }
`;

const ProfileBoxBio = styled.div`
    font-size: 14px;
    font-weight: 200;
    overflow-y: hidden;
    height: 50px;
    width: 600px;
`;