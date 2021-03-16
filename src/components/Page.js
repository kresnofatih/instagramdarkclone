import React from 'react'
import styled from 'styled-components'
import Header from './Header'

function Page({Content}) {
    return (
        <PageContainer>
            <Header/>
            <PageBody>
                {Content &&
                    <Content/>
                }
            </PageBody>
        </PageContainer>
    )
}

export default Page

const PageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PageBody = styled.div`
    padding-top: 20px;
    width: 1000px;
`;
