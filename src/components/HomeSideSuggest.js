import React from 'react'
import styled from 'styled-components'
import Friend from './Friend';

function HomeSideSuggest() {
    return (
        <HomeSideSuggestContainer>
            <HomeSideSuggestHead>
                <h3>Suggestions For You</h3>
                <p>See All</p>
            </HomeSideSuggestHead>
            <Friend/>
            <Friend/>
            <Friend/>
            <Friend/>
            <Friend/>
        </HomeSideSuggestContainer>
    )
}

export default HomeSideSuggest

const HomeSideSuggestContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`;

const HomeSideSuggestHead = styled.div`
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h3 {
        font-size: 16px;
        color: gray;
    }

    > p {
        font-size: 16px;
    }
`;