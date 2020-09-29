import styled from 'styled-components';
import { QUERIES } from '../../styles/style';

export const Checbox = styled.input`
    background-color: transparent;
    cursor: pointer;
    background: #9CE3B4;
`;

export const TaskText = styled.span`
    margin-left:10px;
    font-size: 1.5em;

    @media only screen and (${QUERIES.medium}) {
        font-size: 2em;
    }

    @media only screen and (${QUERIES.small}) {
        font-size: 1.5em;
    }

`;