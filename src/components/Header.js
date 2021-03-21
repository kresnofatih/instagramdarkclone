import React from 'react'
import styled from 'styled-components'
import iglogo from '../iglogo.png'
import { useSelector } from 'react-redux';
import { getCurrentScreen } from '../features/appSlice';
import HeaderHomeBtn from './HeaderHomeBtn';
import HeaderExploreBtn from './HeaderExploreBtn';
import HeaderLikedBtn from './HeaderLikedBtn';
import HeaderSavedBtn from './HeaderSavedBtn';
import HeaderProfileBtn from './HeaderProfileBtn';
import HeaderPostBtn from './HeaderPostBtn';
import SearchBar from './SearchBar';

function Header() {
    const currentScreen = useSelector(getCurrentScreen);
    return (
        <HeaderObject>
            <SearchBar/>
            <HeaderContainer>
                <img src={iglogo} alt=""/>
                <HeaderRight>
                    <HeaderHomeBtn currentScreen={currentScreen}/>
                    <HeaderSavedBtn currentScreen={currentScreen}/>
                    <HeaderLikedBtn currentScreen={currentScreen}/>
                    <HeaderPostBtn/>
                    <HeaderProfileBtn currentScreen={currentScreen}/>
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
    /* background-color: var(--ig-dgray); */
    display: flex;
    justify-content: center;
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
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