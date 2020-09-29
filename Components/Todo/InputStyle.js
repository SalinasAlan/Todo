import styled from 'styled-components';
import { COLORS, QUERIES } from '../../styles/style';

export const Input = styled.input`
    width: 70%;
    height: 70px;
    margin-bottom: 30px;
    color: ${COLORS.textColor}; 
    padding: 10px;
    font-size: 2em;
    border-radius: 20px;
    background: ${COLORS.tertiary};
    border: none;
    outline: none;

    & ::placeholder{
        color: #FFF7F5;
    }

    @media only screen and (${QUERIES.small}) {
        height: 60px;
        font-size: 1.75em;
    }

    @media only screen and (${QUERIES.extraSmall}) {
        height: 50px;
        font-size: 1.5em;
    }

`;

export const ButtonAdd = styled.button`
    width: 50px;
    height: 50px;
    margin-left: 20px;
    font-size: 2em;
    font-weight: bold;
    background: ${COLORS.buttonColor};
    border-radius: 50%;
    color: ${COLORS.textColor};
    cursor: pointer;
    border: none;
    outline: none;
    
    @media only screen and (${QUERIES.extraSmall}) {
        width: 40px;
        height: 40px;
    }
`;