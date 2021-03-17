import React from 'react'
import styled from 'styled-components'
import InstagramIcon from '@material-ui/icons/Instagram';
import {auth, provider} from './Fire'

function Login() {
    const login=e=>{
        e.preventDefault();
        auth.signInWithPopup(provider).catch(err=>console.log(err));
    }
    return (
        <LoginContainer>
            <label onClick={login}>
                <InstagramIcon/><h3>Login</h3>
            </label>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 

    > label {
        padding: 10px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50ch;
        background-color: white;

        > .MuiSvgIcon-root {
            color: var(--ig-lpurple);
            font-size: 30px;
        }
        > h3 {
            color: var(--ig-lpurple);
            margin: 0 5px;
            font-weight: 200;
        }

        :hover {
            cursor: pointer;
            border: 3px solid white;
            background: linear-gradient(45deg, #dc2743 0%,#cc2366 200%); 

            > .MuiSvgIcon-root {
                color: white;
                font-size: 30px;
            }
            > h3 {
                color: white;
                margin: 0 5px;
                font-weight: 200;
            }
        }
    }
    
`;