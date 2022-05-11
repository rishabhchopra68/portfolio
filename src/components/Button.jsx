import styled from 'styled-components';

const Button = styled.button`
    background-color: white;
    border: none;
    height: 100%;
    float: right;
    color: black;
    font-weight: 900;
    padding-inline: 2vw;
    border-radius: 7%;
    font-size: 1.5vw;
    
    :hover {
        transition-delay:0.1s;
        background-color: black;
        color: white;
        font-weight: 900;
    }
`

export default Button;