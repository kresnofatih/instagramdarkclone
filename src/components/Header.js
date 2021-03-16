import React from 'react'
import styled from 'styled-components'
import iglogo from '../iglogo.png'
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function Header() {
    return (
        <HeaderObject>
            <HeaderContainer>
                <img src={iglogo} alt=""/>
                <HeaderRight>
                    <HomeIcon/>
                    <ExploreIcon/>
                    <NotificationsIcon/>
                    <BookmarkBorderIcon/>
                    <FavoriteBorderIcon/>
                </HeaderRight>
            </HeaderContainer>
        </HeaderObject>
    )
}

export default Header

const HeaderObject = styled.div`
    width: 100%;
    padding: 10px 20px;
    border-bottom: 1px solid var(--ig-lgray);
    background-color: var(--ig-dgray);
    display: flex;
    justify-content: center;
`;

const HeaderContainer = styled.div`
    width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
        height: 30px;
    }
`;

const HeaderRight = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > .MuiSvgIcon-root {
        font-size: 25px;

        :hover {
            cursor: pointer;
            color: var(--ig-lpurple);
        }
    }
`;