import React from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {auth} from '../Fire'

function HomeSideProfile() {
    return (
        <HomeSideProfileContainer>
            <HomeSideProfileLeft>
                <HomeSideProfileAvatar src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/79014456-d15b-47a6-8d5b-36721863c970/de6dcmr-f1f3f16d-09a4-49a9-992e-2276cf5a66d3.jpg/v1/fill/w_300,h_300,q_75,strp/vinny__family_guy__square_by_jtbh2005_de6dcmr-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0zMDAiLCJwYXRoIjoiXC9mXC83OTAxNDQ1Ni1kMTViLTQ3YTYtOGQ1Yi0zNjcyMTg2M2M5NzBcL2RlNmRjbXItZjFmM2YxNmQtMDlhNC00OWE5LTk5MmUtMjI3NmNmNWE2NmQzLmpwZyIsIndpZHRoIjoiPD0zMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.YVlNDVxaW5fenKfHVaaR2K1PVijqd-ccw0Nq665ajmc" alt=""/>
                <HomeSideProfileLeftInfo>
                    <h3>kresnofatih_</h3>
                    <p>kresnofatih_</p>
                </HomeSideProfileLeftInfo>
            </HomeSideProfileLeft>
            <HomeSideProfileRight>
                <NavigateNextIcon onClick={()=>{
                    auth.signOut();
                    window.location.reload();
                }}/>
            </HomeSideProfileRight>
        </HomeSideProfileContainer>
    )
}

export default HomeSideProfile

const HomeSideProfileContainer = styled.div`
    padding: 10px 0;
    background-color: var(--ig-ddgray);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HomeSideProfileLeft = styled.div`
    margin-left: 10px;
    display: flex;
    align-items: center;
`;

const HomeSideProfileLeftInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;

    > h3 {
        font-size: 16px;
        font-weight: 400;
    }
    > p {
        font-size: 14px;
        font-weight: 200;
        color: gray;
    }
`;

const HomeSideProfileAvatar = styled(Avatar)`
    :hover {
        cursor: pointer;
    }
`;

const HomeSideProfileRight = styled.div`
    margin-right: 10px;

    > .MuiSvgIcon-root {
        :hover {
            cursor: pointer;
            color: var(--ig-dorange);
        }
    }
`;