import React from 'react'
import styled from 'styled-components'
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import ExploreIcon from '@material-ui/icons/Explore';
import { useDispatch } from 'react-redux';
import { openScreen } from '../features/appSlice';

function HeaderExploreBtn({currentScreen}) {
    const dispatch = useDispatch();
    const redirectToExplore = () => {dispatch(openScreen({screen: 'explore'}))}
    return (
        <HeaderExploreBtnContainer>
            {currentScreen==='explore' ? (
                <ExploreSelected/>
            ):(
                <ExploreUnselected onClick={redirectToExplore}/>
            )}
        </HeaderExploreBtnContainer>
    )
}

export default HeaderExploreBtn

const HeaderExploreBtnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    > .MuiSvgIcon-root {
        font-size: 25px;
    }
`;

const ExploreSelected = styled(ExploreIcon)`
    color: var(--ig-lpurple);
`;
const ExploreUnselected = styled(ExploreOutlinedIcon)`
    :hover {
        cursor: pointer;
        color: var(--ig-lpurple);
    }
`;