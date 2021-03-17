import React from 'react'
import styled from 'styled-components'
import Spinner from 'react-spinkit' 

function AuthLoading() {
    return (
        <AuthLoadingContainer>
            <Spinner name="three-bounce" color="#e1306c"/>
        </AuthLoadingContainer>
    )
}

export default AuthLoading

const AuthLoadingContainer = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;

    > div > div {
        height: 30px;
        width: 30px;
    }
`;