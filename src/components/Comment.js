import React from 'react'
import styled from 'styled-components'

function Comment() {
    return (
        <CommentContainer>
            <h3>kresnofatih_<p>Nice play! 😎</p></h3>
        </CommentContainer>
    )
}

export default Comment

const CommentContainer = styled.div`
    margin-left: 20px;

    > h3 {
        font-size: 14px;
        display: flex;
    }
    > h3 > p {
        padding: 2px 0;
        margin-left: 10px;
        font-weight: 200 !important;
        font-size: 14px;
    }
`;