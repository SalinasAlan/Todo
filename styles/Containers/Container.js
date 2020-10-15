import styled from 'styled-components';
import { COLORS, QUERIES } from '../style';

export const Container = styled.div`
    width: 80%;
    height: 85%;
    margin: auto;
    padding: 30px;
    border-radius: 30px;
    color: ${COLORS.textColor};
    background: ${COLORS.secondary};
    overflow-y: auto;


    @media only screen and (${QUERIES.medium}) {
        width: 75%;
        height: 80%;
    }

    @media only screen and (${QUERIES.small}) {
        width: 80%;
        height: 80%;
        padding: 20px;
    }

    @media only screen and (${QUERIES.extraSmall}) {
        padding: 15px;   
    }

`;

export const ListContainer = styled.div`
    width: 100%;
`;

export const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    margin: auto;
    text-align: center;
    padding: 30px;
    color: ${COLORS.textColor};
    background: ${COLORS.secondary};


    @media only screen and (${QUERIES.medium}) {
        
    }

    @media only screen and (${QUERIES.small}) {
        /* padding: 20px; */
    }

    @media only screen and (${QUERIES.extraSmall}) {
        /* padding: 15px;    */
    }
`;

export const FormContainer = styled.div`
    margin-bottom: 20px;
`;

export const HiddenTasksContainer = styled.div`
    display: ${props => props.show ? "block" : "none"};
`;