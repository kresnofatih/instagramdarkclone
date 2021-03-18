import React from 'react'
import styled from 'styled-components'

function ImageWrapper({
    imageURL,
    email,
    postId,
    timestamp
}) {
    return (
        <ImageWrapperContainer>
            <img src={imageURL} alt=""/>
        </ImageWrapperContainer>
    )
}

export default ImageWrapper

const ImageWrapperContainer = styled.div`
    overflow: hidden;
    height: 320px;
    width: 320px;
    
    > img {
        opacity: 0.8;
        min-width: 100%;
        height: 100%;
        top: 0;
        left: 0;

        :hover {
            cursor: pointer;
            opacity: 1;
        }
    }
`;