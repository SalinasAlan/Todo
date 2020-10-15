import styled from 'styled-components';
import { QUERIES, COLORS } from '../../styles/style';

export const Checkbox = styled.input`
    background-color: transparent;
    cursor: pointer;
    background: #9CE3B4;
`;

export const TaskText = styled.p`
    margin:0 0 0 10px;
    font-size: 1.5em;
    display: inline-block;
    grid-area: text;
    text-decoration: ${props => props.complete ? "line-through" : null};

    @media only screen and (${QUERIES.medium}) {
        font-size: 2em;
    }

    @media only screen and (${QUERIES.small}) {
        font-size: 1.5em;
    }

`;

export const TaskContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 90% 10%;
    grid-template-areas: 
    "task button";
`;

export const TaskWrapper = styled.div`
    display: grid;
    grid-template-columns: 5% 95%;
    grid-template-areas: 
    "checkbox text";
    align-items: center;
    grid-area: task;
`;

export const Button = styled.button`
    margin: 0;
    border: none;
    grid-area: button;
    background-color: transparent;
    /* float: right; */
    color: ${COLORS.buttonColor};
    cursor: pointer;
    outline: none;
`;