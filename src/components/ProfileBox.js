import React from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';

function ProfileBox() {
    return (
        <ProfileBoxContainer>
            <ProfileBoxAvatar 
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/79014456-d15b-47a6-8d5b-36721863c970/de6dcmr-f1f3f16d-09a4-49a9-992e-2276cf5a66d3.jpg/v1/fill/w_300,h_300,q_75,strp/vinny__family_guy__square_by_jtbh2005_de6dcmr-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0zMDAiLCJwYXRoIjoiXC9mXC83OTAxNDQ1Ni1kMTViLTQ3YTYtOGQ1Yi0zNjcyMTg2M2M5NzBcL2RlNmRjbXItZjFmM2YxNmQtMDlhNC00OWE5LTk5MmUtMjI3NmNmNWE2NmQzLmpwZyIsIndpZHRoIjoiPD0zMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.YVlNDVxaW5fenKfHVaaR2K1PVijqd-ccw0Nq665ajmc" 
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