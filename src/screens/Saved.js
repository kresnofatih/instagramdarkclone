import React from 'react'
import styled from 'styled-components'
import Page from '../components/Page';
import SavedBody from '../components/SavedBody';

function Saved() {
    return (
        <SavedContainer>
            <Page Content={SavedBody}/>
        </SavedContainer>
    )
}

export default Saved

const SavedContainer = styled.div`
    width: 100%;
`;