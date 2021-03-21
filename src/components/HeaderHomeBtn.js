import React from 'react'
import styled from 'styled-components'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import HomeIcon from '@material-ui/icons/Home';
import { useDispatch } from 'react-redux';
import { openScreen } from '../features/appSlice';

function HeaderHomeBtn({currentScreen}) {
    const dispatch = useDispatch();
    const redirectToHome = () => {dispatch(openScreen({screen: 'home'}))}
    return (
        <HeaderHomeBtnContainer>
            {currentScreen==='home' ? (
                <HomeSelected/>
            ):(
                <HomeUnselected onClick={redirectToHome}/>
            )}
        </HeaderHomeBtnContainer>
    )
}

export default HeaderHomeBtn

const HeaderHomeBtnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    > .MuiSvgIcon-root {
        font-size: 25px;
    }
`;

const HomeSelected = styled(HomeIcon)`
    /* color: var(--ig-lpurple); */
`;
const HomeUnselected = styled(HomeOutlinedIcon)`
    :hover {
        cursor: pointer;
        color: var(--ig-lpurple);
    }
`;