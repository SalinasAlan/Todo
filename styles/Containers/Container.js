import styled from 'styled-components';
import { COLORS } from '../style';

export const Container = styled.div`
    width: 50%;
    height: 70%;
    margin: auto;
    padding: 30px;
    border-radius: 30px;
    color: ${COLORS.textColor};
    background: ${COLORS.secondary};
`;

export const ListContainer = styled.div`
    width: 100%;
`;