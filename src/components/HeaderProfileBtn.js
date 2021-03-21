import React from 'react'
import styled from 'styled-components'
import PersonIcon from '@material-ui/icons/Person';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { useDispatch } from 'react-redux';
import { openScreen } from '../features/appSlice';

function HeaderProfileBtn({currentScreen}) {
    const dispatch = useDispatch();
    const redirectToProfile = () => {dispatch(openScreen({screen: 'profile'}))}
    return (
        <HeaderProfileBtnContainer>
            {currentScreen==='profile' ? (
                <ProfileSelected/>
            ):(
                <ProfileUnselected onClick={redirectToProfile}/>
            )}
        </HeaderProfileBtnContainer>
    )
}

export default HeaderProfileBtn

const HeaderProfileBtnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    > .MuiSvgIcon-root {
        margin-top: 2px;
        font-size: 26px;
    }
`;

const ProfileSelected = styled(PersonIcon)`
    /* color: var(--ig-lpurple); */
`;
const ProfileUnselected = styled(PersonOutlineIcon)`
    :hover {
        cursor: pointer;
        color: var(--ig-lpurple);
    }
`;