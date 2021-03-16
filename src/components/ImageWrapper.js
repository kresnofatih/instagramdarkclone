import React from 'react'
import styled from 'styled-components'

function ImageWrapper({imageUrl}) {
    return (
        <ImageWrapperContainer>
            <img src={imageUrl} alt=""/>
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
        min-height: 100%;
        max-width: 150%;
        top: 0;
        left: 0;

        :hover {
            cursor: pointer;
            opacity: 1;
        }
    }
`;