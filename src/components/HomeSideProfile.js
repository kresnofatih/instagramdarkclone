import React from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function HomeSideProfile() {
    return (
        <HomeSideProfileContainer>
            <HomeSideProfileLeft>
                <HomeSideProfileAvatar src="https://pbs.twimg.com/profile_images/1131624264405327873/1YpVVtxD_400x400.jpg" alt=""/>
                <HomeSideProfileLeftInfo>
                    <h3>kresnofatih_</h3>
                    <p>kresnofatih_</p>
                </HomeSideProfileLeftInfo>
            </HomeSideProfileLeft>
            <HomeSideProfileRight>
                <NavigateNextIcon/>
            </HomeSideProfileRight>
        </HomeSideProfileContainer>
    )
}

export default HomeSideProfile

const HomeSideProfileContainer = styled.div`
    padding: 10px 0;
    background-color: var(--ig-ddpurple);
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