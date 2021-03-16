import React from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';

function ProfileBox() {
    return (
        <ProfileBoxContainer>
            <ProfileBoxAvatar 
                src="https://pbs.twimg.com/profile_images/1131624264405327873/1YpVVtxD_400x400.jpg" 
                alt=""
            />
            <ProfileBoxInfo>
                <h2>kresnofatih_<EditIcon/></h2>
                <ProfileBoxStats>
                    <h3>167 <p>posts</p></h3>
                    <h3>256 <p>followers</p></h3>
                    <h3>626 <p>following</p></h3>
                </ProfileBoxStats>
                <ProfileBoxBio>
                    TM ITB '16, 18:10 | Just Keep Swimming | Life is an adventure | Always give your best shot in life
                    TM ITB '16, 18:10 | Just Keep Swimming | Life is an adventure | Always give your best shot in life
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